const btn = document.getElementById("btn");

console.log(btn.dataset.id);
console.log(btn.dataset.name);

btn.dataset.status = "done";

console.log(btn.dataset.status);

if (btn.dataset.status === "done") {
    btn.textContent = "Готово!";
}

const colorButtons = document.querySelectorAll(".colorBtn");

colorButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        document.body.style.background = button.dataset.color;
    });
});


let word = "JavaScript";

console.log(word.length);
console.log(word.slice(0, 4));
console.log(word.toUpperCase());
console.log(word.replace("Java", "Type"));


function capitalize(name) {
    name = name.trim();

    return name.slice(0, 1).toUpperCase() +
           name.slice(1).toLowerCase();
}

console.log(capitalize("аННА"));


function checkEmail(email) {
    email = email.trim();

    return email.includes("@") && email.includes(".");
}

console.log(checkEmail("  test@mail.com "));
console.log(checkEmail("testmail.com"));


setTimeout(function() {
    console.log("Прошло 3 секунды");
}, 3000);


const helloTimer = setInterval(function() {
    console.log("Привет");
}, 1000);

setTimeout(function() {
    clearInterval(helloTimer);
}, 5000);


let count = 10;

const countdownTimer = setInterval(function() {
    console.log(count);

    count--;

    if (count < 0) {
        clearInterval(countdownTimer);
        console.log("Старт!");
    }
}, 1000);


const nameInput = document.getElementById("nameInput");
const startBtn = document.getElementById("startBtn");
const greeting = document.getElementById("greeting");
const luck = document.getElementById("luck");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const pointButtons = document.querySelectorAll(".pointBtn");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");

let score = 0;
let time = 20;
let gameTimer = null;
let gameStarted = false;


startBtn.addEventListener("click", function() {

    let name = nameInput.value.trim();

    if (name === "") {
        alert("Введите имя!");
        return;
    }

    name = name.slice(0, 1).toUpperCase() +
           name.slice(1).toLowerCase();

    greeting.textContent = "Привет, " + name + "!";

    score = 0;
    time = 20;
    gameStarted = true;

    scoreElement.textContent = score;
    timeElement.textContent = time;
    result.textContent = "";

    luck.textContent = "Удачи!";

    setTimeout(function() {
        luck.textContent = "";
    }, 2000);

    if (gameTimer !== null) {
        clearInterval(gameTimer);
    }

    gameTimer = setInterval(function() {

        time--;

        timeElement.textContent = time;

        if (time <= 0) {
            clearInterval(gameTimer);

            gameStarted = false;

            result.textContent =
                "Игра окончена! Вы набрали " +
                score +
                " очков";
        }

    }, 1000);
});


pointButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (gameStarted === false) {
            return;
        }

        const points = Number(button.dataset.points);

        score += points;

        scoreElement.textContent = score;
    });

});


restartBtn.addEventListener("click", function() {

    if (gameTimer !== null) {
        clearInterval(gameTimer);
        gameTimer = null;
    }

    nameInput.value = "";

    greeting.textContent = "";
    luck.textContent = "";
    result.textContent = "";

    score = 0;
    time = 20;
    gameStarted = false;

    scoreElement.textContent = score;
    timeElement.textContent = time;

});