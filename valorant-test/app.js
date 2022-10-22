const express = require('express')
const app = express()
const config = require('./config')
const request = require('request')

const option = {
    uri : `https://kr.api.riotgames.com/val/content/v1/contents`,
    qs : {
        locale : 'ko-KR',
        api_key : config.CONNECTKEY
    }

}

const test = {
    name : []
}
// console.log(test)
app.get('/',(req,res) => {
    request(option, (err, resonse, body) => {
        const Valdata = JSON.parse(body)
        const NameArry = []
        const MapArry = []
        for(let i = 0; i<Valdata.characters.length-1; i++) {
            NameArry[i] = Valdata.characters[i].name
        }
        for(let i = 1; i<Valdata.maps.length; i++) {
            MapArry[i] = Valdata.maps[i].name
        }
        res.send(`요원 : ${NameArry} \n맵 : ${MapArry}`)
    })

})


app.listen(3000, () => {console.log('start')})