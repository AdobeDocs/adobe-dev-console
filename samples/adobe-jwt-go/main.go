package main

import (
	"encoding/json"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"gopkg.in/yaml.v3"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"os"
	"time"
)

// config describes the secrets values for the requests
type config struct {
	ID         string   `yaml:"client_id"`
	Secret     string   `yaml:"client_secret"`
	PrivateKey string   `yaml:"private_key_path"`
	ISS        string   `yaml:"iss"`
	SUB        string   `yaml:"sub"`
	AUD        string   `yaml:"aud"`
	Scopes     []string `yaml:"scopes"`
}

var cfg *config

func main() {
	var e error
	if cfg, e = newConfig("config.yaml"); e != nil {
		log.Fatal(e)
	}
	var client = &http.Client{
		Timeout: 10 * time.Second,
	}
	token, err := generateJWT(cfg)
	if err != nil {
		log.Fatal(err)
	}
	data := url.Values{
		"client_id":     {cfg.ID},
		"client_secret": {cfg.Secret},
		"jwt_token":     {token},
	}
	r, e := client.PostForm("https://ims-na1.adobelogin.com/ims/exchange/jwt", data)
	if e != nil {
		log.Fatal(e)
	}
	defer r.Body.Close()
	body, _ := ioutil.ReadAll(r.Body)
	if r.StatusCode != 200 {
		log.Fatal(string(body))
	}
	var output map[string]string
	_ = json.Unmarshal(body, &output)
	req, e := http.NewRequest("GET", "https://analytics.adobe.io/discovery/me", nil)
	if e != nil {
		log.Fatal(e)
	}
	req.Header.Set("x-api-key", cfg.ID)
	req.Header.Set("Authorization", "Bearer "+output["access_token"])
	r, _ = client.Do(req)
	body, _ = ioutil.ReadAll(r.Body)
	fmt.Printf("%s\n", body)
}

// generateJWT creates the jwt
func generateJWT(cfg *config) (string, error) {
	file, e := os.ReadFile(cfg.PrivateKey)
	if e != nil {
		return "", e
	}
	key, e := jwt.ParseRSAPrivateKeyFromPEM(file)
	if e != nil {
		return "", e
	}
	claims := jwt.MapClaims{
		"exp": time.Now().Add(5 * time.Minute).Unix(),
		"iss": cfg.ISS,
		"sub": cfg.SUB,
		"aud": cfg.AUD,
	}
	// add scopes to claims
	for _, v := range cfg.Scopes {
		claims[v] = true
	}
	token := jwt.NewWithClaims(jwt.SigningMethodRS256, claims)
	return token.SignedString(key)
}

// newConfig reads values from a config yaml file
func newConfig(s string) (*config, error) {
	b, e := os.ReadFile(s)
	if e != nil {
		return nil, e
	}
	c := &config{}
	e = yaml.Unmarshal(b, c)
	if e != nil {
		return nil, e
	}
	return c, nil
}
