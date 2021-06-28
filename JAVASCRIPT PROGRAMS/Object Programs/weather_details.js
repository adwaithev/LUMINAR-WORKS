var temperature = [
    { district: "tvm", temprature: 25 },
    { district: "kollam", temprature: 27 },
    { district: "kottayam", temprature: 24 },
    { district: "ekm", temprature: 27 },
    { district: "tsr", temprature: 25 },
    { district: "pkd", temprature: 30 },
    { district: "tvm", temprature: 27 },
    { district: "kollam", temprature: 25 },
    { district: "kottayam", temprature: 28 },
    { district: "ekm", temprature: 29 },
    { district: "tsr", temprature: 32 },
    { district: "pkd", temprature: 31 },

]//district:highesttemp

var weather = {};

for (let data of temperature) {
    //{district:"tvm",temprature:25}, // {district:"kollam",temprature:27},

    let dist = data["district"];//tvm
    let temp = data["temprature"]; //25

    if (dist in weather) {//if tvm in weather
        let old_temp = weather[dist];//old_temp=weather[tvm]=25
        if (old_temp < temp) {
            weather[dist] = temp;
        }
        else {
            weather[dist] = old_temp;
        }

    }
    else {
        weather[dist] = temp;
    }
}
console.log(weather);





//sort dist by temp

function districtSort(data) {
    return Object.entries(data).sort((dist1, dist2) => dist2[1] - dist1[1])
    //[[tvm,27],[kollam,27],[kottayam,28],[ekm,29],[tsr,32]]
}
console.log(districtSort(weather));



//dist with highest temp
var high_dist = districtSort(weather);
console.log(high_dist[0]);

