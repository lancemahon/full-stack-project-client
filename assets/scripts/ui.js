'use strict'

const store = require('./store')

const signUpSuccess = function () {
  console.log('Successful sign up')
  $('#sign-up').toggleClass('hidden')
  document.getElementById('sign-up').reset()
}

const signInSuccess = function (data) {
  store.user = data.user
  console.log('Successful sign in')
  $('#sign-in, #sign-out, #change-password, #new-game, #get-games, #get-over-games, #get-current-games').toggleClass('hidden')
  if (!$('#sign-up').hasClass('hidden')) {
    $('#sign-up').toggleClass('hidden')
  }
  // clear the form
  document.getElementById('sign-in').reset()
}

const signOutSuccess = function () {
  store.user = {}
  console.log('Successful sign out')
  $('#sign-in, #sign-up, #sign-out, #change-password').toggleClass('hidden')
}

const changePasswordSuccess = function () {
  console.log('Successfully changed password')
  document.getElementById('change-password').reset()
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
  failure
}
