var nav = require('./build/gatsbyConfig.js');
const path = require('path');
const fs = require('node:fs');
// regex to find sections:
// subPages:((\s* .*)*)
try {
    if(!nav) {
        throw new TypeError("Unable to get nav");
    }

    if(!nav.gatsbyConfig) {
        throw new TypeError("Gatsby config not defined");
    }

    if(!nav.gatsbyConfig.pathPrefix) {
        throw new TypeError("pathPrefix not found");
    } 

    console.log(nav.gatsbyConfig);
    const pathPrefix = nav.gatsbyConfig.pathPrefix;
    let siteMetadata = nav.gatsbyConfig.siteMetadata ? nav.gatsbyConfig.siteMetadata : {};


    let topNavMarkdown = ``;
    // TODO: prob need url fixer from gatsby theme
    // home link defines the first link defaults to Products
    // can be hidden
    // siteMetadata.versions
    // siteMetadata.home

    topNavMarkdown += `- pathPrefix:\n`;
    topNavMarkdown += `    - ${pathPrefix}:\n`;

    if (siteMetadata.home) {
        topNavMarkdown += '\n- home:\n';
        topNavMarkdown += `    - [${topNav.home.title}](${topNav.home.path})\n`;

        if(siteMetadata.home.hidden) {
            topNavMarkdown += `    - hidden\n`;
        }
    }

    if (siteMetadata.versions) {
        topNavMarkdown += '\n- versions:\n';

        siteMetadata.versions.forEach((versionItem) => {
            let isSelectedText = versionItem.selected ? `selected` : '';
            let versionPathText = versionItem.path ? versionItem.path : '/';
            topNavMarkdown += `    - [${versionItem.title}](${versionPathText}) ${isSelectedText}\n`;
        });
    }

    if(siteMetadata.pages) {
        topNavMarkdown += `\n- pages:\n`;
    }

    siteMetadata.pages?.forEach((navItem) => {
        //let pathText = navItem.path ? navItem.path : '';
        if(navItem.path) {
            topNavMarkdown += `    - [${navItem.title}](${navItem.path})\n`;
        } else {
            topNavMarkdown += `    - ${navItem.title}\n`;
            navItem.menu.forEach((menuItem) =>{
                topNavMarkdown += `        - [${menuItem.title}](${menuItem.path})\n`;
            });
        }
    });

    if(siteMetadata.subPages) {
        topNavMarkdown += `\n- subPages:\n`;
        let sideNavMarkdown = ``;
        let depth = 1;
    
        sideNavMarkdown += buildSideNavRecursively(siteMetadata.subPages, depth);
        topNavMarkdown +=  sideNavMarkdown;
    }

    fs.writeFileSync(path.resolve(__dirname + '/src/pages/config.md'), topNavMarkdown);
} catch (err) {
    console.error(err);
}
// subpages menu should only appear on the subpages path
// need to check paths to
function buildSideNavRecursively(sideNav, depth) {
    let sideNavMarkdown = '';
    console.log(sideNav)

    for (var k in sideNav) {
        let header = sideNav[k].header ? 'header' : ''; 
        sideNavMarkdown += `${insertSpace(depth)}- [${sideNav[k].title}](${sideNav[k].path}) ${header}\n`;

        if (sideNav[k].pages) {
            sideNavMarkdown += buildSideNavRecursively(sideNav[k].pages, depth+1);
        } 
    }
    return sideNavMarkdown;
}

function insertSpace(indentLevel) {
    let spaces = ``;
    for(var i=0; i<indentLevel; i++){
        spaces += `    `
    }
    return spaces;
}

// src/pages/topNav.md
// src/pages/sideNav.md 
// src/pages/get-started/sideNav.md

// go through each subPages and find each path that relates to a subfolder 


// title with path only
// header setting