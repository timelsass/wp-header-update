# wp-header-update
Easily update a value in your theme or plugin file headers.

## Install

Install with yarn:

```
$ yarn add wp-header-update --dev
```

OR

Install with npm:

```
$ npm install wp-header-update --save-dev
```

## Usage

```js
const updateHeader = require( 'wp-header-update' );

( async () => {
	await updateHeader( 'Version', '2.0.0' );
} )();
```

Internally this uses [wp-project-header](https://github.com/timelsass/wp-project-header) to automatically determine if it's running inside of a theme or plugin, so you don't have to worry about passing the file path in.

Sometimes you might need to override that setting though, so a thid parameter for the path to a header file is available.  For example getting a parent theme's version from style.css:

```js
const updateHeader = require( 'wp-header-update' ),
	path = require( 'path' );

( async () => {
	await updateHeader( 'Version', '2.0.0', path.resolve( '../../themes/parent-theme/style.css' ) ).catch( console.error );
} )();
```
