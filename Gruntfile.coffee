module.exports = (grunt) ->
  grunt.initConfig
    'download-atom-shell':
      version: '0.20.2'
      outputDir: 'bin'

  grunt.loadNpmTasks 'grunt-download-atom-shell'
  grunt.registerTask 'default', ['download-atom-shell']

  return