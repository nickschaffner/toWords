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

#### <html>

	<div class="origin"> 56 </div>
	<div class="destination"> </div>

#### <script>

	$( 'div.origin' ).toWords();

This will output:

	fifty-six

## Flexibility

We can also give to toWords an object to extend its capabilities

	$( 'div.origin' ).toWords({
		'destination': $( 'div.new-destination' ),
		'reverse': true
	});
      
destination will change the output target, meanwhile if reverse is true it will read the number from right to left.

### Example: 12

	twenty-one





## Changelog

**1.1**

+ Option of callback function added.
+ Code improvements