const path = require('path')
const fp = require('fastify-plugin')

module.exports = fp(
  async function (fastify) {
    await fastify.register(require('@fastify/static'), {
      root: path.join(__dirname, 'dist'),
      prefix: '/fastify-overview-ui/',
      decorateReply: false
    })
    await fastify.get('/json-overview-ui', async () => fastify.overview())
  },
  {
    fastify: '5.x',
    name: 'fastify-overview-ui',
    dependencies: ['fastify-overview']
  }
)
