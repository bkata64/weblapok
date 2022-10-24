// document.getElementById("vizsla").onclick = function(){
//     fetch('https://dog.ceo/api/breed/vizsla/images/random')
//         .then(response => response.json())
//         .then(adat => {
//             document.getElementById("picture").innerHTML = `<img src ="${adat.message}">`
//     })
// };

// document.getElementById("chow").onclick = function(){
//     fetch('https://dog.ceo/api/breed/chow/images/random')
//         .then(response => response.json())
//         .then(adat => {
//             document.getElementById("picture").innerHTML = `<img src ="${adat.message}">`
//     })
// };

// document.getElementById("boxer").onclick = function(){
//     fetch('https://dog.ceo/api/breed/boxer/images/random')
//         .then(response => response.json())
//         .then(adat => {
//             document.getElementById("picture").innerHTML = `<img src ="${adat.message}">`
//     })
// };

// document.getElementById("coonhound").onclick = function(){
//     fetch('https://dog.ceo/api/breed/coonhound/images/random')
//         .then(response => response.json())
//         .then(adat => {
//             document.getElementById("picture").innerHTML = `<img src ="${adat.message}">`
//     })
// };

// document.getElementById("pug").onclick = function(){
//     fetch('https://dog.ceo/api/breed/pug/images/random')
//         .then(response => response.json())
//         .then(adat => {
//             document.getElementById("picture").innerHTML = `<img src ="${adat.message}">`
//     })
// };

// document.onchange = async function(){
//     let response = await fetch('https://dog.ceo/api/breed/vizsla/images/random');
//     let adat = await response.json();
//     document.getElementById("picture").innerHTML = `<img src ="${adat.message}">`
// };

const myTimeout = setTimeout(async function(){
    let response = await fetch('https://dog.ceo/api/breed/vizsla/images/random');
    let adat = await response.json();
    document.getElementById("picture").innerHTML = `<img src ="${adat.message}">`
}, 0);

document.getElementById("vizsla").onclick = async function(){
    let response = await fetch('https://dog.ceo/api/breed/vizsla/images/random');
    let adat = await response.json();
    document.getElementById("picture").innerHTML = `<img src ="${adat.message}">`
};

document.getElementById("chow").onclick = async function(){
    let response = await fetch('https://dog.ceo/api/breed/chow/images/random');
    let adat = await response.json();
    document.getElementById("picture").innerHTML = `<img src ="${adat.message}">`
};

document.getElementById("boxer").onclick = async function(){
    let response = await fetch('https://dog.ceo/api/breed/boxer/images/random');
    let adat = await response.json();
    document.getElementById("picture").innerHTML = `<img src ="${adat.message}">`
};

document.getElementById("coonhound").onclick = async function(){
    let response = await fetch('https://dog.ceo/api/breed/coonhound/images/random');
    let adat = await response.json();
    document.getElementById("picture").innerHTML = `<img src ="${adat.message}">`
};

document.getElementById("pug").onclick = async function(){
    let response = await fetch('https://dog.ceo/api/breed/pug/images/random');
    let adat = await response.json();
    document.getElementById("picture").innerHTML = `<img src ="${adat.message}">`
};