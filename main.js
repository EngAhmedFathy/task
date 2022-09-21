document.addEventListener("DOMContentLoaded" , function(){
    document.querySelector("#submit").disabled = true;

    document.querySelector("#text").onkeyup = function(){
        if(document.querySelector("#text").value.length > 5){
            document.querySelector("#submit").disabled = false;

        }else{
            document.querySelector("#submit").disabled = true;
        }
    };

    document.querySelector("form").onsubmit = function (){
        var task = document.querySelector("#text").value;
        var Li = document.createElement("li") ;
        Li.innerHTML = task ; 

        document.querySelector("#mytask_ul").appendChild(Li);
        document.querySelector("#text").value = "";
        document.querySelector("#submit").disabled = true ;

        return false ;

    }
    















} )