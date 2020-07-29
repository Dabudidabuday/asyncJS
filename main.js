'use strict';

let form = document.querySelector('#form');
const catalogList = document.querySelector('#catalog');
const urlCatalog = 'https://vape-shop.herokuapp.com/catalog';

function createNode(element) {
    return document.createElement(element)
};

function append(parent, el) {
    return parent.appendChild(el)
}

let getCatalog = fetch(urlCatalog)
    .then(response => response.json())
    .then(data => {
        let products = data.products;

        return products.map(product => {
            let li = createNode('li'),
                p = createNode('p'),
                span = createNode('span');

            p = product.brand;
            span = product.price;
            

            append(li, p)
            append(li, span)
            append(ul, li);
        })
    });









// let getCatalog = new Promise (

//     function (resolve, reject) {
//         let data = fetch('https://vape-shop.herokuapp.com/catalog')
//             .then(data => {
//                 data.json()
//                 console.log(data)
//             });
//         resolve(data)
//     }
// )

// console.log(getCatalog);

// let getCatalog = async function() {
//     let items = await fetch('https://vape-shop.herokuapp.com/catalog')
//         .then(data => { data.json()})
//         .then()
//     console.log(items);
// }

// getCatalog();

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let data = {
        brand: String(event.target.brand.value),
        title: String(event.target.title.value),
        price: Number(event.target.price.value),
        rating: Number(event.target.rating.value),
        availability: Boolean(event.target.availability.checked)
    };
    console.log('Collected data', data);

    let addItem = function() {
        fetch('https://vape-shop.herokuapp.com/admin/products/add', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(function (response) {
            console.log('data as response', response)
            
            if (response.ok) {
                return response.json()
            }
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (err) {
            console.warn(err)
        })
    }    

    if(data.brand && data.price != '') {
        addItem();
    }
})

