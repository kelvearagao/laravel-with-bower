var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	// minificanddo css
    //mix.sass('app.scss');

    // Compile Less
  	mix.less([
  		'app.less'
  	], 'resources/assets/css/custom.css')
  	.styles([
  		'auth/login.css',
  		'welcome.css',
  		'custom.css',
  	], 'public/css/app.css');

    // Concatenando javascript
    mix.scripts([
	    '../vendor/jquery/dist/jquery.js',
	    '../vendor/bootstrap/dist/js/bootstrap.js'
	], 'public/js/app.js');
});
