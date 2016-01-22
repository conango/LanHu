///<reference path="Helpers.ts"/>
///<reference path="Register.ts"/>

///<reference path="tasks/CompileSass.ts"/>

'use strict';

module Gulp {

    export var instance:any;

    /**
     * Init and Register all Tasks and Watchers
     */
    export class Init {

        constructor() {

            var gulp = instance = require('gulp'),
                plugins = require('gulp-load-plugins')({
                    pattern: ['gulp-*', 'gulp.*']
                });

            var register = new Gulp.Register();

            for (var index in register) {

                var object = register[index];

                var task = new Gulp.Tasks[object.task.name],
                    options = Helpers.extend(task.defaults, object.task.options),
                    alias = object.alias ? object.alias : object.task.name;

                gulp.task(alias, task.register.bind(this, gulp, plugins, options));

                /**
                 * Check if has watcher
                 */
                if (object.watch)
                    gulp.watch(object.watch, [alias])

            }

        }

    }

}

var app = new Gulp.Init();