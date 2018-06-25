// get all files from /resources
// read json
// render json to template
// save template to parent directory

const fs = require('fs-extra')
const pug = require('pug')

const json_resources = fs.listDirSync('./resources')
