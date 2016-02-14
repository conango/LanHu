module Gulp {

    export class Register {

        constructor() {

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

        };

    }

}

