module Gulp.Tasks {

    export class CompileSass implements Tasks {

        /**
         * Defaults Values
         * @type {{source: null, name: string, destination: string}}
         */
        public defaults = {
            source: null,
            name: 'style',
            destination: '../../../../../public/css'
        };

        register(gulp, plugins, options) {

            gulp.src(options.source)
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.sass().on('error', plugins.sass.logError))
                .pipe(plugins.sourcemaps.write())
                .pipe(plugins.rename(function (path) {
                        if (options.name) path.basename = options.name;
                    }
                ))
                .pipe(gulp.dest(options.destination));

        }

    }
}