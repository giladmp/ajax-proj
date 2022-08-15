'use strict'

function onQuestion(input) {
    if (input.length >= 3 && input.charAt(input.length - 1) === '?') {
        askAnswer(renderYesOrNo)
    } else {
        clearAnswer()
    }
}

function renderYesOrNo(res) {
    const answer = document.querySelector('.answer-container')
    answer.innerHTML = `<h3>Answer: ${res.answer}</h3><img src="${res.image}" alt=""></img>`
}

function renderJoke(joke) {
    const dogOrJoke = document.querySelector('.dog-or-joke')
    dogOrJoke.innerHTML = `<h3 class="joke">${joke}</h3>`
}

function renderDog(dog) {
    const dogOrJoke = document.querySelector('.dog-or-joke')
    dogOrJoke.innerHTML = `<img class="dog" src="${dog}" alt="">`
   
}

function clearAnswer() {
    const answer = document.querySelector('.answer-container')
    answer.innerHTML = ''
}