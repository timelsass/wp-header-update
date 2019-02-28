const fs = require( 'fs' ).promises,
	projectHeader = require( 'wp-project-header' );


/**
 * Update Theme/Plugin Header by key.
 *
 * @param {String} file Path to file to check headers in. Default: null
 * @param {String} key Key to update in plugin/theme header. Default: 'Version'
 * @param {String} newValue Value to update in header file. Default: '1.0.0'
 */
module.exports = async ( key = 'Version', newValue = '1.0.0', file ) => {
	file = file || await projectHeader( file );
	let content = await fs.readFile( file, 'utf8' ),
		regex = new RegExp( `^([ \t\/*#@]*${ key }*?:[\t ]*)(.*)$`, 'mi' );

	content = content.replace( regex, `$1${ newValue }` );
	await fs.writeFile( file, content, 'utf8' );
}
