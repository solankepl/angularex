app.filter('inWords', function() {
    return function (input, caps){
        var arr = input.toString().split('')
          , map = {
             1: "jan", 2: "feb", 3: "march",   4: "aprial", 5: "may",
              6: "june", 7: "july", 8: "aug", 9: "sep", 10: "oct", 11: "nov", 12: "nov"
          }
          , str = "";
        for(var i in arr) {
            str += map[arr[i]] + " ";
        }
        
        if(caps) {
            str = str.toUpperCase();
        }
    
        return str;
    }
});


/*app.filter('reverseStr', function() {
    return function (input){
        var arr = input.toString().split(''),
        str ="";
        for(var i = arr.length-1; i>=0; i++){
           str += arr[i]; 
        }
        return str;
    }
});*/