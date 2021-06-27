const url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";

export const getLocation = function(options){
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

export function getJSON(url) {
    return fetch(url)
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            console.log(response.json());
            return response.json();
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}

function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}