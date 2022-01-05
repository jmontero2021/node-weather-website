const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d04c18b81e31fece824b2b91e0d8af4b&query='+latitude+','+longitude+'&units=f'

    request({ url, json:true},(error,response)=>{
        const { body } = response
        const { error:errorResponse, current } = body
        const { weather_descriptions, temperature, feelslike} = current
        if(error){
            callback('Unable to connect',undefined)
        }else if (errorResponse){
            callback('Unable to find location',undefined)
        }else {
            callback(undefined, weather_descriptions[0] + '. It is currently ' + temperature + ' its feel like a ' + feelslike)
        }
    })
}

module.exports = forecast