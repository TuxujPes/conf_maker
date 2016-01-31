var broccoli = require('broccoli');
var pickFiles = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var compileSass = require('broccoli-sass');
var transpileJsx = require('broccoli-react');
var minifyImages = require('broccoli-imagemin');
var browserify = require('broccoli-browserify');
var uglifyJs = require('broccoli-uglify-sourcemap');
var addPrefixes = require('broccoli-autoprefixer');
var uglifyCss = require('broccoli-clean-css');

var appRoot = 'app';
var public = 'views';

// SCRIPTS
var jsFiles = new pickFiles(appRoot, {
	srcDir: 'scripts',
	include: ['**/*.js', '**/*.jsx'],
	destDir: 'scripts'
});
jsFiles = transpileJsx(jsFiles, {
	extensions: ['js', 'jsx']
});
jsFiles = uglifyJs(jsFiles);
jsFiles = browserify(jsFiles, {
	entries: ['./scripts/main.js'],
	outputFile: './scripts/bundle.js'
});


// STYLES
var scssFiles = new pickFiles(appRoot, {
	srcDir: 'styles',
	include: ['**/*.scss'],
	destDir: 'style'
});
var cssFiles = new compileSass([scssFiles], 'style/styles.scss', 'style/styles.css');
cssFiles = new addPrefixes(cssFiles);
cssFiles = new uglifyCss(cssFiles);


// JSON
var jsonFiles = new pickFiles(appRoot, {
	srcDir: 'locales',
	include: ['**/*.json'],
	destDir: 'locales'
});


// IMAGES
var images = new pickFiles(appRoot, {
	srcDir: 'images',
	destDir: 'images'
});
images = new minifyImages(images, {
	interlaced: true,
	optimizationLevel: 3,
	progressive: true,
	lossyPNG: false
});


// HTML
var html = new pickFiles(public, {
	destDir: '.'
});


module.exports = new mergeTrees([jsFiles, cssFiles, jsonFiles, images, html]);