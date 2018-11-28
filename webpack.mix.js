/* global __dirname, path */
/* eslint-disable import/no-extraneous-dependencies */

require('dotenv').config();
const mix = require('laravel-mix');

mix
  .webpackConfig(() => ({
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      filename: 'dist/vue-social-media.js',
      libraryTarget: 'umd',
    },
    resolve: {
      extensions: ['.js', '.vue'],
      modules: ['src', 'node_modules'],
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        helpers: path.resolve(__dirname, 'src/helpers/'),
      },
    },
  }))
  .js('src/index.js', 'dist/vue-social-media.js');

/*
 |--------------------------------------------------------------------------
 | Production Mode
 |--------------------------------------------------------------------------
 */

if (mix.inProduction()) {
  mix
    .options({
      uglify: {
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
        },
      },
    });
}
