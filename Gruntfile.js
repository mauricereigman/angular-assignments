module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            files: {
                cwd: 'dist',  // set working folder / root to copy
                src: ['**/*.js', '!**/*.min.js'],           // copy all files and subfolders
                dest: 'dist',    // destination folder
                expand: true           // required when using cwd
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: 'bower_components'
                }
            }
        },
        ngtemplates: {
            assignment4: {
                cwd: 'src/assignment-5',
                src: '**/*.html',
                dest: 'dist/assignment-4/scripts/assignment-4.js',
                options: {
                    module: 'MovieFinder',
                    url: 'templates',
                    append: true
                }
            },
            assignment5: {
                cwd: 'src/assignment-5',
                src: '**/*.html',
                dest: 'dist/assignment-5/scripts/assignment-5.js',
                options: {
                    module: 'MovieFinder',
                    url: 'templates',
                    append: true
                }
            }
        },
        concat: {
            // MANUAL
            basic: {
                src: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-animate/angular-animate.js',
                        'node_modules/angular-ui-router/release/angular-ui-router.js',
                        'node_modules/angular-sanitize/angular-sanitize.js'
                ],
                dest: 'dist/vendor/vendor.js'
            }
        },
        less: {
            options: {
                strictMath: true
            },
            develop: {
                options: {
                    sourceMap: true,
                    compress: false
                },
                files: [{
                    cwd: 'src',  // set working folder / root to copy
                    src: ['**/*.less', '!**/_*.less'],           // copy all files and subfolders
                    dest: 'dist',    // destination folder
                    expand: true,           // required when using cwd
                    ext: '.css'
                }]
            },
            deploy: {
                options: {
                    sourceMap: false,
                    compress: true
                },
                files: [{
                    cwd: 'src',  // set working folder / root to copy
                    src: ['**/*.less', '!**/_*.less'],           // copy all files and subfolders
                    dest: 'dist',    // destination folder
                    expand: true,           // required when using cwd
                    ext: '.css'
                }]
            }
        },
        removelogging: {
            dist: {
                src: "dist/**/*.js" // Each file will be overwritten with the output!
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', 'Firefox ESR']
            },
            develop: {
                options: {
                    map: true
                },
                src: 'dist/**/*.css'
            },
            deploy: {
                src: 'dist/**/*.css'
            }
        },
        copy: {
            images: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.{html,png,jpg,gif,json,svg}'],
                    dest:'dist'
                }]
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js']
        },
        watch: {
            files: ['<%= jshint.files %>', 'src/**/*.css', 'src/**/*.html', 'src/**/*.less'],
            tasks: ['develop']
        },
        clean: {
            src: 'dist'
        },
        mavenPrepare: {
            options: {
                resources: ['**']
            },
            dev: {}
        },
        mavenDist: {
            options: {
                warName: 'contactform',
                deliverables: ['bower_components/**', '!non-deliverable.js'],
                gruntDistDir: 'dist'
            },
            dev: {}
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            UploadForm : {
                files: {
                    'dist/UploadForm/scripts/UploadForm.js': ['dist/UploadForm/scripts/UploadForm.js']
                }
            }
        },
        serve: {
            options: {
                port: 9000
            }
        }
    });


    /*
     * Superconcat, concat javascript to 1 file per sub folder
     */
    grunt.registerTask('superconcat', 'concat by subfolder', function() {
        // get all module directories
        grunt.file.expand('src/*').forEach(function (dir) {

            // get the module name from the directory name
            var dirName = dir.substr(dir.lastIndexOf('/'));

            // get the current concat object from initConfig
            var concat = grunt.config.get('concat') || {};

            // create a subtask for each module, find all src files
            // and combine into a single js file per module
            concat[dirName] = {
                src: [
                    dir + '/**/*.js',
                    dir + '/scripts/**/*.js',
                    '!' + dir + '/scripts/**/bootstrap.js'],
                dest: 'dist/'+ dirName + '/scripts' + dirName + '.js'
            };

            console.log(dir);

            // add module subtasks to the concat task in initConfig
            grunt.config.set('concat', concat);
        });
        // when finished run the concatinations
        grunt.task.run('concat');
    });

    // Tasks
    grunt.registerTask('default', ['clean', 'superconcat', 'removelogging', 'ngAnnotate', 'less:develop', 'copy', 'ngtemplates']);
    grunt.registerTask('develop', ['clean', 'superconcat', 'ngAnnotate', 'less:develop', 'copy', 'ngtemplates']);


};
