var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var webServer = require('gulp-webserver');
var opn       = require('opn');

var server = {
	host: 'localhost',
	port: '8080'
};

gulp.task('webServer', function() {
	gulp.src( '.' )
		.pipe(webServer({
			host:             server.host,
			port:             server.port,
			livereload:       true,
			directoryListing: false
		}));
});

gulp.task('webServer', function() {
	opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('build');

gulp.task('default', ['build', 'webServer', 'watch', 'openbrowser']);