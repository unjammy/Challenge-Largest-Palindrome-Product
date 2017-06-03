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

  var checkPalindrome = function( value ){


    var checker = value.toString();
    var cursor = checker.length;

    if( !(cursor % 2 === 0) ){
      return false;
    } else {

      var factor1 = [];
      var factor2 = [];
      var i = 0;
      for( i = 0; i < (cursor/2); i++ ){
        factor1.push( checker.charAt(i) );
      }
       for( i = (cursor/2); i < cursor; i++ ){
        factor1.push( checker.charAt(i) );
      }



    }

  };

  for ( i =0; i < digits; i++){
    maxValueBuilder.push(9);
  }

  var maxValue = 0;
  maxValue = parseInt( maxValueBuilder.join('') );

  var cursor = 0;
  for( cursor = 0; cursor < maxValue; cursor++ ) {

    for( i = 0; i < maxValue; i++){

      for ( j = 0; j < maxValue; j++ ){

        possiblePalindrome = i * j;
        if( checkPalindrome( possiblePalindrome ) ){
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