'use strict';

let form = document.querySelector('#form');

let getCatalog = new Promise (

        function (resolve, reject) {
            let data = fetch('https://vape-shop.herokuapp.com/catalog')
                .then(data => {
                    data.json()
                    console.log(data)
                });
            resolve(data)
        }
)

console.log(getCatalog);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let data = {
        brand: String(event.target.brand.value),
        title: String(event.target.title.value),
        price: Number(event.target.price.value),
        rating: Number(event.target.rating.value),
        availability: Boolean(event.target.availability.checked)
    };

    console.log(data)

    fetch('https://vape-shop.herokuapp.com/catalog')

    fetch('https://vape-shop.herokuapp.com/admin/products/add', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function(response) {
        if(response.ok) {
            return response.json()
            console.log(response)
        }
        return Promise.reject(response)
    }).then(function(data) {
        console.log(data)
    }).catch(function(err) {
        console.warn(err)

    })
})

