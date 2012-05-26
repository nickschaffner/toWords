/*
*	String Literal jQuery Plugin v1.0 beta
*	tested on jQuery v.1.7.2
*
*
*	author: Ricardo Andrés Bello
*	website: http://www.ricardoaandres.com
*	github profile: http://www.github.com/ricardoaandres
*	date: May, 2012
*/



if ( typeof Object.create !== 'function' ){
	Object.create = function( obj ){
		function F(){};

		F.prototype = obj;

		return new F();
	}
}

(function( $, undefined ){

	var stringLiteral = {

		init: function( node, config ){
			this.elem = node;
			this.$elem = $( this.elem );
			this.number = this.$elem.text().replace( /[^0-9]/g, '' ).split( '' );
			this.stringed = '';

			this.updateSettings( config );

			this.createString( this.number );
			this.appendString();
		},

		createString: function( n ){
			var stringed = '',
				times = n.length,
				zeros = '';

			if ( times <= 9 ){
				for ( var cntr = 9 - times; cntr !== 0; cntr-- ){
					zeros += '0';
				}

				if ( this.config.reverse ){
					n = n.reverse().join( '' );
					n = ( zeros + n ).split( '' );
				}else{
					n = zeros + n.join( '' );
					n = n.split( '' );
				}

				stringed += this.stringNumber( n[0], n[1], n[2] );
				stringed += ( n[0] == 0 && n[1] == 0 && n[2] == 0 ) 
					? '' 
					: ' million ';
				stringed += this.stringNumber( n[3], n[4], n[5] );
				stringed += ( n[3] == 0 && n[4] == 0 && n[5] == 0 ) 
					? '' 
					: ' thousand ';
				stringed += this.stringNumber( n[6], n[7], n[8] );
			}else{
				stringed = 'Max number is 999,999,999';
			}	

			this.stringed = ( stringed == '' ) ? 'zero' : stringed;
		},

		stringNumber: function( numb1, numb2, numb3 ){
			var unit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
				tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
				decs = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

			if ( numb1 != 0 ){
				numb1 = unit[numb1] + ' hundred ';
			}else{
				numb1 = '';
			}

			if ( numb2 != 0 ){
				if ( numb2 == 1 ){
					numb2 = tens[numb3];
					numb3 = '';
				}else{
					numb2 = decs[numb2];

					if ( numb3 != 0 ){
						numb3 = '-' + unit[numb3];
					}else{
						numb3 = '';
					}
				}
			}else{
				numb2 = '';

				if ( numb3 != 0 ){
					numb3 = unit[numb3];
				}else{
					numb3 = '';
				}
			}

			return ( numb1 + numb2 + numb3 == 0 ) ? '' : numb1 + numb2 + numb3;
		},

		appendString: function(){
			$( this.config.destination ).text( this.stringed );
		},

		updateSettings: function( config ){
			this.config = $.extend( {}, $.fn.stringLiteral.config, config );
		}

	}

	$.fn.stringLiteral = function( config ){

		return this.each( function(){
			var sl = Object.create( stringLiteral );

			sl.init( this, config );
		});
		
	}

	$.fn.stringLiteral.config = {
		'destination': $( '.destination' ),
		'reverse': false
	}

})( jQuery );











