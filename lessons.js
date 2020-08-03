'use strict';

// let getCommit = async function() {
//     let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
//     let response = await fetch(url);
//     let commits = await response.json();

//     alert(commits[0].author.login);
// }

// getCommit();

// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//     .then(response => response.json())
//     .then(commits => alert(commits[0].author.login))



// if(response.ok) {
//     let json = response.json();
// } else {
//     alert('HTTP ошибка', response.status);
// }



// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data));