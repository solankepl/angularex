app.filter('inWords', function() {
    return function (input, caps){
        var arr = input.toString().split('')
          , map = {
              0: "Zero", 1: "One", 2: "Two",   3: "Three", 4: "Four",
              5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine"
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