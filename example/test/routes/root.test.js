'use strict'

const { test } = require('node:test')
const { build } = require('../helper')

test('default root route', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/'
  })
  t.assert.deepStrictEqual(res.json(), { root: true })
})

// inject callback style:
//
// test('default root route', (t) => {
//   t.plan(2)
//   const app = await build(t)
//
//   app.inject({
//     url: '/'
//   }, (err, res) => {
//     t.error(err)
//     t.same(JSON.parse(res.payload), { root: true })
//   })
// })
