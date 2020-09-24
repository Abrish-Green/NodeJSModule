const request = require('request');
const Bluebird = require('bluebird');
const fetch = require('node-fetch');

fetch.Promise = Bluebird;

const getIPAddress = () => {
    return new Promise((resolve, reject) => {
        resolve(fetch('https://ipinfo.io?token=692ff20c0cee87')
            .then(res => res.text())
            .then(body => console.log(body))
        )
        reject('Unable to Fetch the Address...')
    })
}
module.exports.getIPAddress = getIPAddress;