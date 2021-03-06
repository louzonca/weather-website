const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/414c2af835a71ed3896574ec0cbcdbf4/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'
    request({url, json: true}, (error, {body}) => {
       if (error) {
          callback('Unable to connect to weather service')
       } else if (body.error){
          callback('Unable to find location')
       } else {
          callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +' degrees out. There is a ' + body.currently.precipProbability+'% chance of rain.'
          + ' The temperature will reach ' + body.daily.data[0].temperatureHigh + ' degrees and it will go down to ' + body.daily.data[0].temperatureLow + ' degrees.')
         }
    })
 }

 module.exports = forecast