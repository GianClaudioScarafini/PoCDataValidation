const fs = require('fs');

// Read the config file
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

// Read the JSON file
const data = fs.readFileSync('./models/models.json', 'utf8');
const jsonData = JSON.parse(data);

// Get all results
const results = jsonData.data.elementsByElementGroup.results;



var mycateconfig = config.ParameterNameExistence.Category.results
console.log("Category from config:", mycateconfig)
var parametersconfig = config.ParameterNameExistence.Parameters

modelelementcateories = jsonData.data.elementsByElementGroup.results

// console.log("Model Element Categories:", modelelementcateories);

if (modelelementcateories in mycateconfig){
    console.log(modelelementcateories.name)
}
