var src  = './src';

module.exports = {
  sass: {
    src: src + '/scss/main.scss',
    dest: src + '/css',
    settings: {
      sass: {
        sourcComments: 'map'
      },
      scsslint: {
        config: 'lint.yml'
      }
    }
  },
  html: {
    src: src + '*.html',
    dest: './'
  }
}
