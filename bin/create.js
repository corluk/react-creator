#!/usr/bin/env node 


const packageJSON  = require("../resources/package.json") 
const exec = require("child_process").execSync
const dependencies =  Object.keys(packageJSON.dependencies) 
const devDependencies = Object.keys(packageJSON.devDependencies)
if(proccess.argv.length < 3){
    throw new Error("you must set folder name to install ")
}
console.log(process.argv)
//exec(` yarn add ${dependencies.join(" ")}`)
//exec(` yarn add -D  ${devDependencies.join(" ")}`)