const path = require('path');

module.exports = {
  paths: {
    source: path.resolve(__dirname, '../src/'),
    public: path.resolve(__dirname, '../public/'),
    output: path.resolve(__dirname, '../dist/'),
  },
  server: {
    host: 'localhost',
    port: 8000,
  },
  limits: {
    /* Image files size in bytes. Below this value the image file will be served as DataURL (inline base64). */
    images: 8192,
    /* Font files size in bytes. Below this value the font file will be served as DataURL (inline base64). */
    fonts: 8192,
  },
};
