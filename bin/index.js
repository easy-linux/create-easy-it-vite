#! /usr/bin/env node

import inquirer from "inquirer";
import fs from "node:fs"
import path from "node:path";
import * as url from "node:url";
import { copyFolderRecursiveSync } from "./utils.js"

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const curDir = process.cwd();
const TYPE_MULTY = 'template-multy';
const TYPE_SINGLE = 'template-simple';


inquirer.prompt([
    {
        type: 'list',
        message: 'Choose a template to init the project:', 
        name: 'template',
        choices: [
            {key: TYPE_MULTY, value: TYPE_MULTY},
            {key: TYPE_SINGLE, value: TYPE_SINGLE},
        ]
    }
]).then((enswers) => {
    //we need to copy template folder here
    copyFolderRecursiveSync(path.join(__dirname, `../${enswers.template}`), path.join(curDir), true)
})
.catch((error) => {
    console.log(error)
})