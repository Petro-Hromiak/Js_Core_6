// Task 4




// ======================================
let list = document.querySelector(`ol`).children;
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener(`click`, function () {
        list[i].style.color = list[i].textContent
    })
}
// =======================================================================================









// let list = document.querySelector(`ol`).children
// console.log(list)
// list.forEach(element => {
//     list.style.color = list.textContent
// });

// list.addEventListener(`click`, colorList)

// function colorList(params) {
//     for(let i = 0; i < list.length; i++) {
        
//             list[i].style.color = list[i].textContent
//         }
// }