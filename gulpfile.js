const clean = require('gulp-clean');
// const imagemin = require('gulp-imagemin');WIP

const project_folder = "dist";
const source_folder = "src";

const path = {
  build: {
    html: project_folder,
    css: project_folder + "/css",
    js: project_folder + "/js",
    // img: project_folder + "/img" WIP
  },

  src: {
    html: source_folder + "/*.html",
    css: source_folder + "/css/styles.css",
    js: source_folder + "/js/script.js",
    // img: source_folder + "/img" WIP
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

const html = () => {
  return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.reload({
      stream:true
    }))
};


// WIP
// const img = () => { 
//   return src(path.src.img)
//     .pipe(
//       imagemin({
//         progressive: true,
//         svgPlugins: [{removeViewBox: false }],
//         interPlaced: true,
//         optimizationLevel: 3
//       })
//     )
//     .pipe(dest(path.build.img))
// };

const css = () => {
  return src(path.src.css)
    .pipe(dest(path.build.css))
};

const js = () => {
  return src(path.src.js)
    .pipe(dest(path.build.js))
};

const cleaner = () => {
  return src('dist',
    { read: false })
    .pipe(clean());
};

let { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require("browser-sync").create();

const build = gulp.series(html, js, css);
const watch = gulp.parallel(build, browserSync);

<<<<<<< HEAD

// exports.img = img; WIP
=======
>>>>>>> 420a32757c5a8c1059858892678c767d87632cc4
exports.css = css;
exports.js = js;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
exports.clean = cleaner;