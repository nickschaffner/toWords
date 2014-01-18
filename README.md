#toWords jQuery Plugin


toWords is a jQuery Plugin wich allows you to convert a numeric value to its equivalent literal string. From -999,999,999 to 999,999,999.

toWords will even take away every non-numeric character on the string, so if you type "Pink iPhone 5C" the output will be "five".

Import it right after jQuery:

    <script src="http://code.jquery.com/jquery-latest.js"></script> 
	<script src="js/libs/towords.jquery.js"></script>

To use it just select the origin and call toWords to make its magic.

	$('.number').toWords();

This little snippet will convert any number from every div with the class 'number' to their respective string literal.



### Example:

#### <html\>

    <div class="number">23</div>
	<div class="number">-23543</div>
	<div class="number">2523</div>
	<div class="number">-463423</div>
	<div class="number">2365858</div>
	
#### <script\>

    $( 'div.number' ).toWords();

This will output:

    twenty-three
    minus twenty-three thousand five hundred forty-three
    two thousand five hundred twenty-three
    minus four hundred sixty-three thousand four hundred twenty-three
    two million three hundred sixty-five thousand eight hundred fifty-eight



## Flexibility

We can also give to toWords an object to extend its capabilities

	$( '.number' ).toWords({
		'appendTo': 'div.destination',
		'reverse': true
	});
      
appendTo will change the output target, meanwhile if reverse is true it will read the number from right to left.

	12 -> twenty-one

it is also possible to give toWords a callback function.

    $('.number').toWords(function(){});
or

	$('.number').toWords({reverse: true}, function(){
	    console.log('done, honey');
	});

never stop chaining...

    $('.number').hide().toWords(function(){
		console.log('Im McLovin');
    }).addClass('string-literal').fadeIn();


## Changelog

**0.2**

+ Wider range of numbers.
+ Callback function support.

**0.1**

+ Changed Object name that made the plugin impossible to be used.
+ Option of callback function added.
+ Code improvements.
+ General bug fixes.