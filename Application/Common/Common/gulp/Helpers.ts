module Gulp {

    /**
     * Helper Functions
     */
    export class Helpers {

        /**
         * Merge defaults with user options
         * @param {Object} defaults Default settings
         * @param {Object} options User options
         * @returns {Object} Merged values of defaults and options
         */
        public static extend(defaults, options) {

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

        }

    }

}

