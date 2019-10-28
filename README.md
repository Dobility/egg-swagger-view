# egg-swagger-view

[swagger-ui](https://github.com/swagger-api/swagger-ui) plugin for egg, which display your swagger output in browser, based on swagger-ui-dist@2.x

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
    swaggerPath: '/path/to/swaggerFile'             // swagger output file path, absolute path based on project dir
                                                    // default as '/docs/swagger.json'
  },
  static: {
    dir: [
      { dir: getAbsoluteFSPath(), prefix: '/' },    // config swagger ui dir as static resource
      { dir: './docs', prefix: '/docs' },           // config the swagger output file as static resource
                                                    // make sure dir name equal to prefix based on swaggerPath
    ],
  },
}
```

Default value:

+ `swaggerPath`: `/docs/swagger.json`

## Browse

browse `http://{ip}:{port}/swagger.html` to view your api docs! 
