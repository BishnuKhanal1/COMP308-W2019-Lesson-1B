"use strict";
//let myGlobalVariable=0;
//self executinh anonymous function
//IIFE - Imediately invoked function expression
(function(){

    let myFunctionalVariable = 0;
    function Start(){
        let myLocalvariable = 0;
       // console.log("App started---"+ myFunctionalVariable);
        console.log('App started---${myFunctionalVariable}');
    }

    window.addEventListener("load",Start);

})();