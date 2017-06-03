/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here

  var i = 0;
  var possiblePalindrome;
  var maxValueBuilder = [];
  var anyPalindrome = [];

  for ( i =0; i < digits; i++){
    maxValueBuilder.push(9);
  }

  var maxValue = 0;
  maxValue = parseInt( maxValueBuilder.join('') );

  var cursor = 0;
  for( cursor = 0; cursor < maxValue; cursor++ ) {

    for( i = 0; i < maxValue; i++){

      for ( j = 0; i < maxValue; j++ ){

        possiblePalindrome = i * j;
        if( palindrome( possiblePalindrome ) ){
          anyPalindrome.push( possiblePalindrome );
        }

      }

    }


  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};