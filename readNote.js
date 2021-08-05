const { notStrictEqual } = require('assert')
const fs = require('fs')

const dataBuffer = fs.readFileSync('notes.json')
const data = dataBuffer.toString()
const JSON_Data = JSON.parse(data)

const readNote = function (title){
    let found = false
    for(let i in JSON_Data){
        if(JSON_Data.title[i]===title){
            found=true
            console.log(i)
            break;
        }
    }
    if(found===false){
        console.log('NO such note found')
    }

}

module.exports = readNote