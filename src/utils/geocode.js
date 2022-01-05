const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoiam1vbnRlcm8yMDIxIiwiYSI6ImNreDlpdWtsbTB3aWcydnFobnlqaWM2MWwifQ.aQwMASQeI2eLRZlkepbLlQ&limit=1'

    request({url:url, json:true}, (error, response)=>{
        const { body } = response
        const { features } = body
        if(error){
            callback('Unable to connect', undefined)
        }else if (features.length===0){
            callback('unable find', undefined)
        } else {
            callback(undefined, {
                latitude:features[0].center[1],
                longitude:features[0].center[0],
                location:features[0].text
            })
        }
    })
}

module.exports = geocode