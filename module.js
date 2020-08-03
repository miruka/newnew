const {
    people,
    ages
} = require('./people')

console.log(people, ages)

const os = require('os');
const fs = require('fs')


console.log(os.platform(), os.homedir())