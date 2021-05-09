#!/usr/bin/env node 


const packageJSON  = require("../resources/package.json") 
const exec = require("child_process").execSync
const dependencies =  Object.keys(packageJSON.dependencies) 
const devDependencies = Object.keys(packageJSON.devDependencies)
const  fs = require('fs');
const path = require("path")
const  home_dir  = process.cwd();


if(process.argv.length < 3){
    throw new Error("you must set folder name to install ")
}
const projectName = process.argv[2]
const project_dir = path.resolve(home_dir,projectName)
if (!fs.existsSync(project_dir)){
    fs.mkdirSync(project_dir);
}
process.chdir(project_dir)

const newPackageJSON = {
    name: projectName,
    version : "1.0.0",
    main : "index.js",
    scripts: {
        "start": "yarn dev:glup && node_modules/.bin/nodemon -r esm output/server/index.js",
        "lint": "node_modules/.bin/eslint",
        "dev:glup" : "node_modules/.bin/gulp  ",
        "dev:webpack": "node_modules/.bin/cross-env NODE_ENV=development node_modules/.bin/webpack -c webpack.config.js",
        "dev:server": "nodemon -r esm test/server.js",
        "dev:prod": "node_modules/.bin/cross-env NODE_ENV=production    node_modules/.bin/webpack -c webpack.prod.js "
      }
}

console.log(JSON.stringify(newPackageJSON))


console.log(process.argv)
//exec(` yarn add ${dependencies.join(" ")}`)
//exec(` yarn add -D  ${devDependencies.join(" ")}`)