const fs = require('fs')
const csv = require('fast-csv')
const { delimiter } = require('path')

const stream = fs.createReadStream('fii.csv')

const streamCsv = csv.parse({
    headers: true,
    delimiter: ',',
    quote: '"'
})
    .on('data', data => console.log(data))
    .on('end', () => console.log('finished'))

stream.pipe(streamCsv)
