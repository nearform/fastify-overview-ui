'use strict'

async function root(fastify) {
  fastify.get('/', async function rootHandler() {
    return { root: true }
  })
}

root[Symbol.for('fastify.display-name')] = 'Root Plugin'
module.exports = root
