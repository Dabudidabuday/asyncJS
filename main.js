'use strict';

let form = document.querySelector('#form');
let data = new FormData(form);

document.addEventListener('submit', function(event) {
    event.preventDefault();

    fetch('http://api-atmo.tk/catalog', {
        method: 'POST',
        body: new FormData(event.target)
    }).then(function(response) {
        if(response.ok) {
            return response.json()
        }
        return Promise.reject(response)
    }).then(function(data) {
        console.log(data)
    }).catch(function(err) {
        console.warn(err)
    })
})
