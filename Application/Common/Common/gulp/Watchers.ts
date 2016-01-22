module Gulp {

    export class Watcher {

        constructor(source, tasks) {
            Gulp.instance.watch(source, [tasks])
        }

    }

}

//new Gulp.Watcher('/Resources/Sass/**/*.scss', 'sass');