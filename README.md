# 📊 fastify-overview-ui

UI for [fastify-overview's](https://github.com/Eomm/fastify-overview) graphic representation.

## Setup

This plugin requires `fastify-overview` to be installed

- `npm i fastify-overview-ui`

## Usage

```js
await fastify.register(require('fastify-overview'), {...})
await fastify.register(require('fastify-overview-ui'))
```

The UI will be available at `{your app's url}/fastify-overview-ui`

## Running the example

An example application is provided which can be used to try out the plugin.

- `npm run build`
- `cd example`
- `npm run dev`
- open `http://localhost:3000/fastify-overview-ui`

This will use the built version of the application. For developing the plugin see the next section.

## Development

An example application is provided which can be used to develop the plugin locally while using the development version of the source code of the client application.

- run `npm run dev` in the `examples` folder
- run `npm run dev` in the root folder
- open `http://localhost:3001`
- make changes to the client codebase and see them reflected in the UI live

## Radial mockups

Design proposal can be found in [this Figma file](https://www.figma.com/file/tt4BtV637DtdJpfdhriBWR/Fastify?node-id=0%3A1).

## License

Licensed under [MIT](./LICENSE).
