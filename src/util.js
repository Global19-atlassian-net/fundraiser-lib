'use strict'

var BASE_URL

if (process.browser) {
  BASE_URL = window.location.origin
} else {
  BASE_URL = 'https://cosmos.interblock.io'
}
console.log('base', BASE_URL)

function byte (n) {
  return Buffer([ n ])
}

function concat (...buffers) {
  return Buffer.concat(buffers)
}

module.exports = {
  BASE_URL,
  byte,
  concat
}
