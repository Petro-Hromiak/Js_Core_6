
// Task 1
let countOver = 0;
document.querySelector(`.block`).addEventListener(`mouseover`, function () {
    countOver++;
    if (countOver == 1) {
        event.target.style.backgroundColor = `red`;
    }
    else if (countOver == 2) {
        event.target.style.backgroundColor = `yellow`;
    }
    else if (countOver == 3) {
        event.target.style.backgroundColor = `green`;
        countOver = 0;
    }
}
)
document.querySelector(`.block`).addEventListener(`mouseout`, function () {
    event.currentTarget.style.backgroundColor = `violet`
})


// Task 2

document.querySelector(`.secret-block`).addEventListener(`mouseover`, function () {
    this.style.backgroundColor = `yellow`;
    this.textContent = `Хочеш знати який?`
    this.style.color = `blue`
}
)

document.querySelector(`.secret-block`).addEventListener(`mousedown`, function () {
    this.style.backgroundColor = `black`;
    this.textContent = `А я тобі не скажу!`
    this.style.color = `white`
}
)

document.querySelector(`.secret-block`).addEventListener(`mouseup`, function () {
    this.style.backgroundColor = `yellow`;
    this.textContent = `Хочеш знати який?`
    this.style.color = `blue`
}
)

document.querySelector(`.secret-block`).addEventListener(`mouseout`, function () {
    this.style.backgroundColor = `blueviolet`;
    this.textContent = `У мене є секрет!`
    this.style.color = `black`
}
)

