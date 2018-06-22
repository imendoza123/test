function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
  // Check if input value is not empty
  if ( n === undefined)
  {
    console.log("Input value is required");
  }
  // Check if input value is between range
  else if (n >= 0 && n<= 1000000)
  {
    //Check if input value is equal to 1
    if( n === 1)
    {
      // Output 0
      console.log(0);
    }
    else
    {
      //Input value is valid
      console.log("Input value:" + n);

      //Variable use to store result
      var result= 0;      
      
      while (result < n)
      {        
        result = randomBinary(n);
      }

      // Calculates random Binary Numbers and store them in variable binary
      function randomBinary(b)
      {
        var binary=0;

        for (var i=0; i <= b; i++)
        {
          if ( flip() === true)
          {
            binary += "1";
          }
          else if ( flip() === false)
          {
            binary += "0";
          }
        }
        return binary;
      }

      //Return result and convert it to Integer
      return parseInt(result,2);
    }
  }
  else
  {
    console.log("Input value not valid, value must be greater than 0 and less than 1000000");
  }
}

console.log(randomNumber(10))