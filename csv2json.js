const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const csvFilePath = path.join(__dirname, 'customer-data.csv')
const jsonFilePath = path.join(__dirname, 'customer-data.json')

const JSONconvert = () => {
    console.log('Converting from CSV file to JSON file ...')

    const converter = csv().fromFile(csvFilePath)

    converter.then((jsonObj) => {
        fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, 2))
    })

    converter.on('error', (error) => {
        console.log(`error: ${error}`)
        process.exit(1)
    })

    converter.on('done', () => {
        console.log('Successfully converted at', jsonFilePath)
    })
}

JSONconvert(process.argv[2], process.argv[3])