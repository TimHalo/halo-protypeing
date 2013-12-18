module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'js/scripts.js',
                dest: 'js/scripts.min.js'
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['bower_components/jquery/jquery.min.js','js/boostrap/dropdown.js', 'js/boostrap/affix.js','js/boostrap/scrollspy.js','js/boostrap/collapse.js','js/boostrap/trsnitions.js','js/boostrap/tab.js','js/boostrap/tooltip.js', 'js/scripts.min.js'],
                dest: 'js/built.js'
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: "scss",
                    cssDir: "css",
                    imagesDir: "img",
                    fontsDir: "fonts",
                    javascriptsDir: "js",
                    outputStyle: "compressed"
                }
            }
        },
        watch: {
            files: ['js/scripts.js', 'scss/app.scss', 'scss/_settings.scss', 'scss/_custom.scss'],
            tasks: ['uglify', 'concat', 'compass']
        }
    });

    //Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Default task(s).
    grunt.registerTask('default', ['uglify', 'concat', 'compass']);

};
