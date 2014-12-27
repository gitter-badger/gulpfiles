var dest = './build';
var src  = './src';

module.exports = {
  sass: {
    src: src + '/scss/*.{sass, scss}',
    dest: dest,
    settings: {
      sass: {
        sourcComments: 'map'
      },
      scsslint: {
        'config': 'lint.yml'
      }
    }
  }
  html: {
    src: src + '*.html',
    dest: './'
  }
}
