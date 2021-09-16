

//!......................................1

// let articles = [
//     {
//         title:"batman orgin",
//         author: "lili",
//         date:1990
//     },

//     {
//         title:"spiderman seconed",
//         author: "sing",
//         date:2018
//     },

//     {
//         title:"thor end game",
//         author: "guro ni",
//         date:2020
//     }
// ]

// articles.forEach(article => {
//     console.log(article);
// });

// for (const article of articles) {
//     console.log(article);
// }

//!.........................................2


// articles.forEach(article => {
//     for(let key in article){
//         console.log(`${key}: ${article[key]}`);
//     }
//     console.log('');
// })

//!.........................................3

// articles.forEach(article => {
//     console.log(article);
// });


// articles.forEach(article => {
//     console.log(article.author);
// });

//!.........................................4

let arrayOfNums = [1,2,3,4,5,6,7,8,9]
let sum = 0

arrayOfNums.forEach(num => {
    sum += num
});
console.log(sum);
