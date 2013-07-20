module.exports = function(grunt) {

	grunt.initConfig({
		compass: {
			all: {
				options: {
					config: 'source/css/config.rb'
				}
			}
		},

		watch: {
			all: {
				files: ['source/css/**/*'],
				tasks: ['compass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);

};
