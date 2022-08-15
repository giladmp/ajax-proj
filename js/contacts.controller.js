'use strict'

function onInit() {
    ask(renderContacts)
}

function renderContacts(contacts) {
    const container = document.querySelector('.grid-container')

    contacts.map((contact) => {
        contact = `<div class="grid-item"><h4 class="header name">${contact.lname}, ${contact.fname}</h4>
        <div class="content-container flex"><img src="https://robohash.org/${contact.fname}?set=set1" alt="">
        <ul><li>Phone:${contact.tel}</li><li>City:${contact.city}</li><li>State:${contact.state}</li><li>Zip:${contact.zip}</li><li>Address:${contact.address}</li></ul></div></div>`

        container.innerHTML += contact
    })
}