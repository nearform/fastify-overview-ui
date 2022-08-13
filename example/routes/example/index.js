'use strict'

async function myApplicationRoutes(fastify) {
  fastify.addHook('onRequest', function run4All(request, reply, done) {
    done()
  })

  fastify.get('/', async function () {
    return 'this is an example'
  })
  fastify.get('/list', async function () {
    return 'this is an example'
  })

  fastify.post(
    '/',
    {
      onRequest: [
        async function namedHook() {},
        async () => {},
        async function run4Single() {}
      ]
    },
    async function () {
      return 'this is an example'
    }
  )

  fastify.put('/edit', async function () {
    return 'this is an example'
  })
}

myApplicationRoutes[Symbol.for('fastify.display-name')] = 'Routes Plugin'
module.exports = myApplicationRoutes
