function cubeOdd(arr) {

    var arr = arr.map(x => x*x*x);
     console.log (arr);
     
     if (arr.includes(NaN)){
     
     return undefined;
     
     }
     
   function filterOdd(x){
   
      if (x%2 === 0){
       return undefined;
    } 
    else return x;
    }
   
   
   var totalResult = arr.filter(filterOdd); 
   
   console.log(totalResult);
   
   
   totalResult = totalResult.reduce(function(sum,number){
     return sum + number;
     
     },0);
   
   return totalResult;
   }