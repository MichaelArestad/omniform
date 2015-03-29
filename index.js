var express = require( 'express' ),
		app = express(),
		request = require( 'request' );

app.use( express.static( __dirname + '/' ) );

app.get( '/', function( req, res ){
	res.render( 'index', function( err, html ){
		if( err ){ console.log( err ); }
	});
});

app.listen( 3000 );

console.log( 'Express server started on port 3000' );
