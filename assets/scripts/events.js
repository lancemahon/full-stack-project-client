'use strict'

const api = require('./api')
const ui = require('./ui')
// const store = require('./store')
const getFormFields = require('./../../lib/get-form-fields')

const onSignUp = function (event) {
  // prevent default action from happening
  event.preventDefault()
  // get form data
  const data = getFormFields(event.target)

  // make the api call
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onGetCharacters = function () {
  api.getCharacters()
    .then(ui.getCharactersSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  // prevent default
  event.preventDefault()
  // get form data
  const data = getFormFields(event.target)

  // make the api call
  api.signIn(data)
    .then(ui.signInSuccess)
    // .then(onGetCharacters)
    .catch(ui.failure)
}

const onSignOut = function (event) {
  // prevent default
  event.preventDefault()

  const data = getFormFields(event.target)
  // make the api call
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  // prevent default
  event.preventDefault()

  const data = getFormFields(event.target)
  // make api call
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onNewCharacter = function (event) {
  // prevent default
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log('new character event: ', event)
  console.log(data)
  // make api call
  api.newCharacter(data)
    .then(ui.newCharacterSuccess)
    .then(onGetCharacters)
    .catch(ui.failure)
}

const onDeleteCharacter = function (event) {
  // prevent default
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteCharacter(id)
    .then(onGetCharacters)
    .catch(ui.failure)
}

const onUpdateCharacter = function (event) {
  // prevent default
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('event: ', event)
  console.log('event.target; ', event.target)
  const id = $(event.target).data('id')
  console.log('id: ', id)
  console.log('data :', data)
  api.updateCharacter(id, data)
    .then(onGetCharacters)
    .catch(ui.failure)
}

const onWannaPlay = function (event) {
  event.preventDefault()
  const choice = $(this).attr('data-id')
  console.log(choice)
  ui.wannaPlay(choice)
}

const attachEventListeners = function () {
  $('.pick').on('submit', onWannaPlay)
  //
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#new-character').on('submit', onNewCharacter)
  $('.character-list').on('click', '.delete-button', onDeleteCharacter)
  $('.character-list').on('submit', '.update-character', onUpdateCharacter)
}

module.exports = {
  attachEventListeners
}
