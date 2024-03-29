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


## Credits

+ Ricardo Andrés Bello (@ricardoaandres)

## License

#####The MIT License (MIT)

######Copyright © 2013 Ricardo Andrés Bello

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.