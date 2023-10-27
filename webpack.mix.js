let mix = require('laravel-mix');

mix.setPublicPath('./')
    // .sass('src/assets/sass/popup.scss', 'dist/css')
    .js('src/assets/js/background.js', 'dist/js')
    .js('src/assets/js/popup.js', 'dist/js').vue()
    // .disableNotifications()
    .copy('src/assets/images/', 'dist/images')
    .options({
        processCssUrls: false
    });