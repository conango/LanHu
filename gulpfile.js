var Gulp;
(function (Gulp) {
    /**
     * Helper Functions
     */
    var Helpers = (function () {
        function Helpers() {
        }
        /**
         * Merge defaults with user options
         * @param {Object} defaults Default settings
         * @param {Object} options User options
         * @returns {Object} Merged values of defaults and options
         */
        Helpers.extend = function (defaults, options) {
            var extended = {}, prop;
            for (prop in defaults) {
                if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
                    extended[prop] = defaults[prop];
                }
            }
            for (prop in options) {
                if (Object.prototype.hasOwnProperty.call(options, prop)) {
                    extended[prop] = options[prop];
                }
            }
            return extended;
        };
        return Helpers;
    })();
    Gulp.Helpers = Helpers;
})(Gulp || (Gulp = {}));
var Gulp;
(function (Gulp) {
    var Register = (function () {
        function Register() {
            var base = './Application/Common/Common';
            return [
                {
                    alias: 'sass',
                    task: {
                        name: 'CompileSass',
                        options: {
                            source: base + '/sass/App.scss',
                            name: 'style',
                            destination: 'public/css'
                        }
                    },
                    watch: base + '/sass/**/*.scss'
                }
            ];
        }
        ;
        return Register;
    })();
    Gulp.Register = Register;
})(Gulp || (Gulp = {}));
var Gulp;
(function (Gulp) {
    var Tasks;
    (function (Tasks) {
        var CompileSass = (function () {
            function CompileSass() {
                /**
                 * Defaults Values
                 * @type {{source: null, name: string, destination: string}}
                 */
                this.defaults = {
                    source: null,
                    name: 'style',
                    destination: '../../../../../public/css'
                };
            }
            CompileSass.prototype.register = function (gulp, plugins, options) {
                gulp.src(options.source)
                    .pipe(plugins.sourcemaps.init())
                    .pipe(plugins.sass().on('error', plugins.sass.logError))
                    .pipe(plugins.sourcemaps.write())
                    .pipe(plugins.rename(function (path) {
                    if (options.name)
                        path.basename = options.name;
                }))
                    .pipe(gulp.dest(options.destination));
            };
            return CompileSass;
        })();
        Tasks.CompileSass = CompileSass;
    })(Tasks = Gulp.Tasks || (Gulp.Tasks = {}));
})(Gulp || (Gulp = {}));
///<reference path="Helpers.ts"/>
///<reference path="Register.ts"/>
///<reference path="tasks/CompileSass.ts"/>
'use strict';
var Gulp;
(function (Gulp) {
    /**
     * Init and Register all Tasks and Watchers
     */
    var Init = (function () {
        function Init() {
            var gulp = Gulp.instance = require('gulp'), plugins = require('gulp-load-plugins')({
                pattern: ['gulp-*', 'gulp.*']
            });
            var register = new Gulp.Register();
            for (var index in register) {
                var object = register[index];
                var task = new Gulp.Tasks[object.task.name], options = Gulp.Helpers.extend(task.defaults, object.task.options), alias = object.alias ? object.alias : object.task.name;
                gulp.task(alias, task.register.bind(this, gulp, plugins, options));
                /**
                 * Check if has watcher
                 */
                if (object.watch)
                    gulp.watch(object.watch, [alias]);
            }
        }
        return Init;
    })();
    Gulp.Init = Init;
})(Gulp || (Gulp = {}));
var app = new Gulp.Init();
var Gulp;
(function (Gulp) {
    var Watcher = (function () {
        function Watcher(source, tasks) {
            Gulp.instance.watch(source, [tasks]);
        }
        return Watcher;
    })();
    Gulp.Watcher = Watcher;
})(Gulp || (Gulp = {}));
//new Gulp.Watcher('/Resources/Sass/**/*.scss', 'sass'); 
