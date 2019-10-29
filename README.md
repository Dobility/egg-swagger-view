# egg-swagger-view

[swagger-ui](https://github.com/swagger-api/swagger-ui) plugin for egg, based on swagger-ui-dist@2.x, which display your swagger output in browser and start with egg server that already runs.

## Usage

First, install it:

```sh
npm i egg-swagger-view -S
```

Import it via `config/plugin.js`:

```js
module.exports = {
  ...
  swaggerUi: {
    enable: true,
    package: 'egg-swagger-view'
  }
  ...
}
```

Configure it via `config/config.<env>.js`:

```js
const { getAbsoluteFSPath } = require('egg-swagger-view')
module.export = {
  swaggerUi: {
    // swagger output file path, absolute path based on project dir
    // default as '/docs/swagger.json'
    swaggerPath: '/path/to/swaggerFile'
  },
  static: {
    dir: [
      // config swagger ui dir as static resource
      { dir: getAbsoluteFSPath(), prefix: '/' },
      // config the swagger output file as static resource
      // make sure dir name equal to prefix based on swaggerPath
      { dir: './docs', prefix: '/docs' },
    ],
  },
}
```

Default value:

+ `swaggerPath`: `/docs/swagger.json`

## Browse

browse `http://{ip}:{port}/swagger.html` to view your api docs!

（ip & port are already config in your egg project, no need to start any web server.） 
