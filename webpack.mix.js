/* global __dirname, path */
/* eslint-disable import/no-extraneous-dependencies */

const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .webpackConfig(() => ({
    entry: path.resolve(__dirname, 'src/index.js'),

    output: {
      filename: 'dist/index.js',
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

  .js('src/index.js', 'dist/index.js');

/*
 |--------------------------------------------------------------------------
 | Production Mode
 |--------------------------------------------------------------------------
 */

if (mix.inProduction()) {
  mix
    .options({
      terser: {
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      },
    });
}
