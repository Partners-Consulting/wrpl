var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');
    minify = require('gulp-minify');
    runSequence = require('run-sequence');

gulp.task('minify', function() {
   return gulp.src('lib/js/*.js')
        .pipe(minify({
            ext:{
                src:'.js',
                min:'.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js','*.min.js']
        }))
        .pipe(gulp.dest('pre'))
});

gulp.task('move',['minify'], function() {
    return gulp.src('pre/*.min.js')
        .pipe(gulp.dest('dist'))
});

gulp.task('deletingFolders',['minify', 'move'], function () {
    gulp.src('pre', {read: false})
        .pipe(clean());
});


gulp.task('build', ['minify', 'move', 'deletingFolders']);

var embedlr = require('gulp-embedlr'),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

// Set up an express server (but not starting it yet)
var server = express();
// Add live reload
server.use(livereload({port: livereloadport}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function (req, res) {
    res.sendfile('index.html', {root: '/'});
});

gulp.task('watch', function() {
    // Watch our scripts
    gulp.watch(['js/*.js', 'js/**/*.js']);
});

// Dev task
gulp.task('dev', function() {
    // Start webserver
    server.listen(serverport);
    // Start live reload
    lrserver.listen(livereloadport);
    // Run the watch task, to keep taps on changes
    gulp.run('watch');
});