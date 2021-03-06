const clean = require('gulp-clean');

const project_folder = "dist";
const source_folder = "src";

const path = {
  build: {
    html: project_folder,
    css: project_folder + "/css",
    js: project_folder + "/js"
  },

  src: {
    html: source_folder + "/*.html",
    css: source_folder + "/css/styles.css",
    js: source_folder + "/js/script.js"
  }
};

const browserSync = () => {
  browsersync.init({
    server: {
      baseDir: project_folder
    },
    port: 3000,
    notify: false
  })
};

function html() {
  return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.reload({
      stream:true
    }))
};

function css() {
  return src(path.src.css)
    .pipe(dest(path.build.css))
};

function js() {
  return src(path.src.js)
    .pipe(dest(path.build.js))
};

function cleaner() {
  return src('dist',
    { read: false })
    .pipe(clean());
};

let { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require("browser-sync").create();

const build = gulp.series(html, js, css);
const watch = gulp.parallel(build, browserSync);

exports.css = css;
exports.js = js;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
exports.clean = cleaner;