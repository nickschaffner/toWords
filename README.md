# [toWords jQuery Plugin](http://www.ricardoaandres.com/code/towords)

toWords is a jQuery Plugin wich allows you to convert a numeric value to its equivalent literal string. From 0 to 999,999,999.

toWords will even take away every non-numeric character on the string, so if you type "iPhone 4S" the output will be "four".

**note: toWords will only work fine with integer values higher than 0.**

Download any of the two versions of toWords ( standard or minified ) and import it as shown below:

	<script src="http://code.jquery.com/jquery-latest.js"></script> 
	<script src="js/towords.x.x.jquery.js"></script>

To use it just select the origin and call toWords to make its magic.

	$( 'div.origin' ).toWords();

This little snippet will convert any number from every div with the class of 'origin' and append it to a div with the class of 'destination'.

### Example:

	<div class="origin"> 56 </div>
	<div class="destination"> </div>

	$( 'div.origin' ).toWords();