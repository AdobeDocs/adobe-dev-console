const path = require('path');
const fs = require('node:fs');
const { pathPrefix } = require('./gatsby-config.js');
const { globSync }= require('glob');

try {
    if(!pathPrefix) {
        throw new TypeError("pathPrefix not found");
    } 

    let results = globSync(__dirname + '/src/pages/**/*.md');
    let data = [];

    results.forEach(result => {
        const nonNormalizedMdFilePath = result.replace(__dirname + '/src/pages', pathPrefix);
        const mdFilePath = path.resolve(nonNormalizedMdFilePath);

        // Fixes paths that don't end in a trailing slash but should.
        // index.md has a directory-level URL that needs a trailing slash
        if(mdFilePath.includes('index.md')) {
            const source = mdFilePath.replace('/index.md', '');
            data.push({
                "Source" : source,
                "Destination" : source + '/'
            });
        }

        // Fixes paths that end in a trailing slash but shouldn't.
        // skip any index.md or config.md as they don't need redirect
        if(!mdFilePath.includes('index.md') && !mdFilePath.includes('config.md')) {
            const source = mdFilePath.replace('.md', '/');
            data.push({
                "Source" : source,
                "Destination" : source.replace(/\/$/, "")
            });
        }
    });

    let redirectionsData = 
    {
        "total" : data.length,
        "offset": 0,
        "limit": data.length,
        "data" : data,
        ":type": "sheet"
    };

    let redirectionsFilePath = path.resolve(__dirname + '/src/pages/redirects.json');
    fs.writeFileSync(redirectionsFilePath, JSON.stringify(redirectionsData));

} catch (err) {
    console.error(err);
}
