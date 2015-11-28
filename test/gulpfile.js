/*// Include gulp
var gulp = require('gulp');

var concat = require('gulp-concat');
// Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('build/js'));
});
// Default Task
gulp.task('default', ['scripts']);*/

// Include gulp
var gulp = require('gulp');
// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// Concatenate & Minify JS
gulp.task('root_scripts', function() {
    return gulp.src(['js/swfobject.js', 'js/swfupload.js', 'js/swfupload.queue.js', 'js/jquery.swfupload.js', 'js/upload.js', 'js/jquery.typewatch.js', 'js/melody.dev.js', 'js/jquery.timer.min.js','js/watch.js'])
      .pipe(concat('root_loader.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'));
});


gulp.task('template_default_js', function() {
  return gulp.src(['templates/default/js/bootstrap.min.js', 'templates/default/js/jquery.cookee.js', 'templates/default/js/jquery.validate.min.js', 'templates/default/js/jquery.carouFredSel.min.js', 'templates/default/js/jquery.carouFredSel.min.js', 'templates/default/js/jquery.maskedinput-1.3.min.js', 'templates/default/js/jquery.tagsinput.min.js', 'templates/default/js/jquery-scrolltofixed-min.js','templates/default/js/jquery.uniform.min.js','templates/default/js/jquery.ba-dotimeout.min.js','templates/default/js/melody.dev.js','templates/default/js/lightbox.min.js','templates/default/js/waypoints.min.js','templates/default/js/melody.social.min.js'])
      .pipe(concat('template_default_loader.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'));
});


gulp.task('template_default_2_0_js', function() {
  return gulp.src(['templates/default/2_0/assets/js/jquery.js', 'templates/default/2_0/assets/js/modernizr.min.js', 'templates/default/2_0/assets/js/bootstrap.min.js', 'js/swfobject.js', 'templates/default/2_0/assets/js/main.js', 'templates/default/2_0/assets/js/jquery.infinitescroll.min.js', 'templates/default/2_0/assets/js/wow.min.js', 'templates/default/2_0/assets/js/masonry.pkgd.min.js','templates/default/2_0/assets/js/imagesloaded.js','templates/default/2_0/assets/js/jquery.nicescroll.min.js','templates/default/2_0/assets/js/slidebars.js','templates/default/2_0/assets/js/classie.js','templates/default/2_0/assets/js/jquery.sticky.js'])
      .pipe(concat('template_default_2_0_js_loader.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'));
});

gulp.task('template_default_2_0_assets_about', function() {
  return gulp.src([ 'templates/default/2_0/assets/assets-about/js/jquery.js','templates/default/2_0/assets/assets-about/js/modernizr.min.js', 'templates/default/2_0/assets/assets-about/js/bootstrap.min.js', 'templates/default/2_0/assets/assets-about/js/main.js', 'templates/default/2_0/assets/assets-about/js/wow.min.js', 'templates/default/2_0/assets/assets-about/js/masonry.pkgd.min.js', 'templates/default/2_0/assets/assets-about/js/jquery.nicescroll.min.js','templates/default/2_0/assets/assets-about/js/slidebars.js','templates/default/2_0/assets/assets-about/js/jquery.easing.min.js','templates/default/2_0/assets/assets-about/js/jquery.sticky.js'])
      .pipe(concat('template_default_2_0_assets_about_loader.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'));
});






/////////////////  CSS task

gulp.task('template_default_css', function() {
  gulp.src(['./templates/default/css/*.css'])
    .pipe(concat('default_build.css'))
	.pipe(rename({suffix: '.min'}))
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css/default/css/'));
});


gulp.task('template_default_2_0_css', function() {
  gulp.src(['./templates/default/2_0/assets/css/*.css','./templates/default/2_0/assets/css/newcss/*.css','./templates/default/2_0/assets/popup/jquery.fancybox.css'])
    .pipe(concat('default_2_0_build.css'))
	.pipe(rename({suffix: '.min'}))
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css/default/css/'));
});

gulp.task('template_default_2_0_assets_about_css', function() {
  gulp.src(['./templates/default/2_0/assets/assets-about/css/*.css'])
    .pipe(concat('default_2_0_assets_about_build.css'))
	.pipe(rename({suffix: '.min'}))
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css/default/css/'));
});

// Default Task
gulp.task('default', ['root_scripts','template_default_js','template_default_2_0_js','template_default_2_0_assets_about','template_default_css','template_default_2_0_css','template_default_2_0_assets_about_css'],function(){
	
});