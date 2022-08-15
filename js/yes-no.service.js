'use strict'

let gAnswer = ''

function askAnswer(cb) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE &&
            xhr.status === 200) {
            const res = JSON.parse(xhr.responseText)
            cb(res)

            const YesOrNo = res.answer
            if (YesOrNo === 'yes') askJoke(renderJoke)
            else if (YesOrNo === 'no') askDog(renderDog)
        }
    }
    xhr.open('GET', `https://yesno.wtf/api`, true)
    xhr.send()
}

function askJoke(cb) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE &&
            xhr.status === 200) {
            const res = JSON.parse(xhr.responseText)
            const joke = getJoke(res)
            cb(joke)
        }
    }
    xhr.open('GET', `http://api.icndb.com/jokes/random`, true)
    xhr.send()
}

function askDog(cb) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE &&
            xhr.status === 200) {
            const res = JSON.parse(xhr.responseText)
            const dog = getDog(res)
            cb(dog)
        }
    }
    xhr.open('GET', `https://dog.ceo/api/breeds/image/random`, true)
    xhr.send()
}

function getJoke(obj) {
    const joke = obj['value'].joke
    return joke
}

function getDog(obj) {
    const dog = obj['message']
    return dog

}