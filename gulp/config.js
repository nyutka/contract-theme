var dest = './build';
var src = './app';

module.exports = {
    app: './app',
    build: './build',
    browserSync: {
        server: {
            // We're serving the src folder as well for sass sourcemap linking
            baseDir: [dest, src]
        },
        notify: false, //hide the annoying notification
        files: [
            dest + '/**/*',
            // Exclude Map files
            '!' + dest + '/**.map'
        ]
    },
    css: {
        dest: dest + '/css',
        mainBundle: 'main.scss',
        main: [
            src + '/css/styles.css',
            src + '/css/styles.scss',
            src + '/includes/**/*.css',
            src + '/includes/**/*.scss'
        ],
        vendorBundle: 'vendor.css',
        vendors: [
            './node_modules/mapbox.js/theme/style.css'
        ],
        includePaths: [
            src + '/css',
            './node_modules'
        ]
    },
    fonts: {
        src: src + '/fonts/**/*',
        dest: dest + '/fonts'
    },
    images: {
        src: [
            src + '/images/**/*',
            src + '/includes/**/images/**/*'
        ],
        dest: dest + '/images'
    },
    html: {
        src: src + '/**/*.html',
        includes: src + '/includes/**/*.html',
        dest: dest + '/'
    },
    js: {
        all: src + '/**/*.js',
        src: src + '/js/script.js',
        dest: dest + '/js',
    }
};
