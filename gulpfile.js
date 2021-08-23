const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const pugrecss = require("gulp-purgecss");
const autoprefixer = require("autoprefixer");
const babel = require("gulp-babel");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browserSync = require("browser-sync").create();

//Sass Task
function scssTask() {
  return src("app/scss/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(
      pugrecss({
        content: ["*.html"],
      })
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(dest("dist/css", { sourcemaps: "." }));
}

//Javascript
function jsTask() {
  return src("app/js/script.js", { sourcemaps: true })
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(terser())
    .pipe(dest("dist/js", { sourcemaps: "." }));
}

//BrowserSync Tasks
function browserSyncServer(cb) {
  browserSync.init({
    server: {
      baseDir: ".",
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0",
      },
    },
  });
  cb();
}

//BrowserSync Reload
function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

//Watch Task
function watchTask() {
  watch("*.html", browserSyncReload);
  watch(["app/scss/**/*.scss", "app/js/**/*.js"], series(scssTask, jsTask, browserSyncReload));
}
//Default Gulp Task
exports.default = series(scssTask, jsTask, browserSyncServer, watchTask);
