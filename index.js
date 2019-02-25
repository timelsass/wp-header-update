const fs = require( 'fs' ).promises,
	header = require( 'wp-header-search' );

/**
 * Update Theme/Plugin Header by key.
 *
 * @param {String} file Path to file to check headers in. Default: null
 * @param {String} key Key to update in plugin/theme header. Default: 'Version'
 * @param {String} newValue Value to update in header file. Default: '1.0.0'
 */
module.exports = async ( file, key = 'Version', newValue = '1.0.0' ) => {
	let oldValue = await header( key, file );
	let content = await fs.readFile( file, 'utf8' );
	content = content.replace( oldValue, newValue );
	await fs.writeFile( file, content, 'utf8' );
}
