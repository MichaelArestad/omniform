var ofEditable = document.getElementsByClassName( 'of-editable' );

var makeEditable = function( ofArray ){
	for ( var i = 0; i < ofArray.length; i++ ) {
		ofArray[ i ].contentEditable = 'true';
	}
};

makeEditable( ofEditable );
