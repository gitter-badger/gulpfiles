var dest = './build';
var src  = './src';

module.exports = {
  sass: {
    src: src + '/scss/*.{sass, scss}',
    dest: dest,
    settings: {
      sourcComments: 'map'
    }
  }
  tsc: {
    src: '',
    dest: dest
  }
}
