const fs = require('fs');

// Read the JSON file
const data = fs.readFileSync('./models/models.json', 'utf8');
const jsonData = JSON.parse(data);

// Get all results
const results = jsonData.data.elementsByElementGroup.results;


// results.forEach((result,index)=>[
//     console.log(`Parameter Name: ${result.name}`)
// ])

parameterList = new Array()

// Print each result
results.forEach((result, index) => {
    console.log(`ID: ${result.id}`);
    console.log(`Name: ${result.name}`);
    console.log('Properties:');

    result.properties.results.forEach(prop => {
        console.log(`  - ${prop.name}: ${prop.value}`);
        parameterList.push({
            // name: result.name,
            property : prop.name });
    });
});

// console.log("Parameter List:", parameterList);

console.log(results)