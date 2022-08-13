'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')

async function app(fastify, opts) {
  await fastify.register(require('fastify-overview'), {
    addSource: true
  })
  await fastify.register(require(path.join(__dirname, '../')))

  fastify.addHook('onRequest', async function globalHook() {
    // do something
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}

app[Symbol.for('fastify.display-name')] = 'App Name'
module.exports = app
