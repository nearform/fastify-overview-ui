'use strict'

async function noteRoutes(fastify) {
  fastify.addHook('onRequest', function noteHook(request, reply, done) {
    done()
  })

  fastify.decorateRequest('getAuthor', function () {
    return {}
  })

  fastify.get('/:id', async function () {
    return 'this is an example'
  })
  fastify.get('/list', async function () {
    return 'this is an example'
  })

  fastify.register(function childNodePlugin(instance, opts, next) {
    instance.get('/inheritance', async function () {
      return 'done'
    })
    next()
  })
}

noteRoutes[Symbol.for('fastify.display-name')] = 'Note Plugin'
module.exports = noteRoutes
