'use strict'

const store = require('./store')
const showCharactersTemplate = require('./templates/character-list.handlebars')
const nameYourCharacterTemplate = require('./templates/name-your-character.handlebars')
// const updateButtonTemplate = require('./templates/update-button.handlebars')

const signUpSuccess = function () {
  console.log('Successful sign up')
  $('#sign-up').toggleClass('hidden')
  document.getElementById('sign-up').reset()
}

const signInSuccess = function (data) {
  store.user = data.user
  console.log('Successful sign in')
  // const showCharactersHtml = showCharactersTemplate({ characters: data.characters }) // not working!
  // $('#character-list').html(showCharactersHtml)
  $('#sign-in, #sign-out, #change-password, #new-character, .character-selection').toggleClass('hidden')
  if (!$('#sign-up').hasClass('hidden')) {
    $('#sign-up').toggleClass('hidden')
  }
  // clear the form
  document.getElementById('sign-in').reset()
}

const signOutSuccess = function () {
  store.user = {}
  console.log('Successful sign out')
  $('#sign-in, #sign-up, #sign-out, #change-password, #new-character').toggleClass('hidden')
  $('.character-list').html('')
  $('.character-list').toggleClass('hidden') // redundant, but safe
}

const changePasswordSuccess = function () {
  console.log('Successfully changed password')
  document.getElementById('change-password').reset()
}

const getCharactersSuccess = (data) => {
  const showCharactersHtml = showCharactersTemplate({ characters: data.characters })
  $('.character-list').html(showCharactersHtml)
}

const newCharacterSuccess = (data) => {
  console.log('Successfuly created a new character')
  $('.name-your-character').html('') // empty the form html
  $('.character-list').toggleClass('hidden')
}

const wannaPlay = (choice) => {
  $('.character-selection').toggleClass('hidden')
  $('.name-your-character').toggleClass('hidden')
  const nameYourCharacterHtml = nameYourCharacterTemplate({ choice: choice })
  $('.name-your-character').html(nameYourCharacterHtml)
}

const backToCharacterCreation = () => {
  // hide character list
  $('.character-list').toggleClass('hidden')

  // show character creation menu
  $('.character-selection').toggleClass('hidden')
  $('.name-your-character').toggleClass('hidden')
}

const failure = function () {
  console.log('Failure!')
  // reset all form fields on any failed submission
  document.getElementById('sign-in').reset()
  document.getElementById('sign-out').reset()
  document.getElementById('sign-up').reset()
  document.getElementById('change-password').reset()
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  newCharacterSuccess,
  getCharactersSuccess,
  wannaPlay,
  backToCharacterCreation,
  failure
}
