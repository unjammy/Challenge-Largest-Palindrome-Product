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
  var maxValue = 0;
  var possiblePalindrome = 0;
  var maxValueBuilder = [];
  var anyPalindrome = [];
  var cursor = 0;
  var checkPalindrome = function( value ){


    var checker = value.toString();

    if( !(checker.length % 2 === 0) ){

      return false;

    } else {

      for ( var i = 0; i < (checker.length/2); i++ ){

        if( !(checker.charAt(i) === checker.charAt(checker.length - i - 1) ) ){

          return false;

        }
      }

      return true;

    }

  };


  for ( i =0; i < digits; i++){
    maxValueBuilder.push(9);
  }

  maxValue = parseInt( maxValueBuilder.join('') );



  for( i = 0; i <= maxValue; i++){

    for ( j = 0; j <= maxValue; j++ ){

      possiblePalindrome = i * j;

      if( checkPalindrome( possiblePalindrome ) ){

        anyPalindrome.push( possiblePalindrome );
        factor_0 = i;
        factor_1 = j;

      }
    }
  }


  for( i = 0; i < (anyPalindrome.length - 1); i++){

    if( anyPalindrome[i] > palindromeNumber ){

      palindromeNumber = anyPalindrome[i];

    }
  }





  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };

};