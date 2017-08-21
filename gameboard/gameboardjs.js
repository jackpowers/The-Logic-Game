var bool1Fixed = false;
var bool2Fixed = false;
var bool3Fixed = false;
var bool4Fixed = false;
var bool5Fixed = false;
var bool6Fixed = false;
var bool7Fixed = false;
var bool8Fixed = false;
var bool9Fixed = false;


var bool1Value;
var bool2Value;
var bool3Value;
var bool4Value;
var bool5Value;
var bool6Value;
var bool7Value;
var bool8Value;
var bool9Value;

var winner;

var player = 'True';


//function computerPlay(){
//    
//     var n = document.getElementsByClassName('drop');
//     var available = [];
//    
//    for (var i = 0; i < n.length; i++){
//        
//        if (n[i].disabled == false){
//            
//            available.push(n[i]);
//            
//        }
//        
//    }
//    
//    
//    var id = available[0].id;
//    
//    available[0].disabled = true;
//    
//    available[0].innerHTML='T';
//    
//       
//}



function setOp1() {

    var n = document.getElementsByClassName('drop');
    var v = document.getElementById('1').value;



    var tv1 = document.getElementById('tv1').innerHTML;

    var tv2 = document.getElementById('tv2').innerHTML;

    document.getElementById('1').disabled = true;

    if (tv1 == 'T' && tv2 == 'T') {

        document.getElementById('bool1').innerHTML = 'T';
        bool1Value = true;

    } else if (tv1 == 'T' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool1').innerHTML = 'F';
            bool1Value = false;

        } else if (v == 'v') {

            document.getElementById('bool1').innerHTML = 'T';
            bool1Value = true;

        } else if (v == 't') {

            document.getElementById('bool1').innerHTML = 'F';
            bool1Value = false;

        } else if (v == 'o') {

            document.getElementById('bool1').innerHTML = 'F';
            bool1Value = false;

        }


    } else if (tv1 == 'F' && tv2 == 'T') {

        if (v == '^') {

            document.getElementById('bool1').innerHTML = 'F';
            bool1Value = false;

        } else if (v == 'v') {

            document.getElementById('bool1').innerHTML = 'T';
            bool1Value = true;

        } else if (v == 't') {

            document.getElementById('bool1').innerHTML = 'T';
            bool1Value = true;

        } else if (v == 'o') {

            document.getElementById('bool1').innerHTML = 'F';
            bool1Value = false;

        }

    } else if (tv1 == 'F' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool1').innerHTML = 'F';
            bool1Value = false;

        } else if (v == 'v') {

            document.getElementById('bool1').innerHTML = 'F';
            bool1Value = false;

        } else if (v == 't') {

            document.getElementById('bool1').innerHTML = 'T';
            bool1Value = true;

        } else if (v == 'o') {

            document.getElementById('bool1').innerHTML = 'T';
            bool1Value = true;



        }

    }




    document.getElementById('bool1').className = 'tg-sh07 truthvalue';

    document.getElementById('tilde1').disabled = false;

    bool1Fixed = true;

    if ((bool1Fixed == true) && (bool2Fixed == true) && (bool3Fixed == true)) {

        for (var i = 0; i < 4; i++) {
            n[i].disabled = false;
            n[i].value = "?";

        }


    }

    if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'

}


function setOp2() {


    var n = document.getElementsByClassName('drop');
    var v = document.getElementById('2').value;



    var tv1 = document.getElementById('tv2').innerHTML;

    var tv2 = document.getElementById('tv3').innerHTML;

    document.getElementById('2').disabled = true;

    if (tv1 == 'T' && tv2 == 'T') {

        document.getElementById('bool2').innerHTML = 'T';
        bool2Value = true;

    } else if (tv1 == 'T' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool2').innerHTML = 'F';
            bool2Value = false;

        } else if (v == 'v') {

            document.getElementById('bool2').innerHTML = 'T';
            bool2Value = true;

        } else if (v == 't') {

            document.getElementById('bool2').innerHTML = 'F';
            bool2Value = false;

        } else if (v == 'o') {

            document.getElementById('bool2').innerHTML = 'F';
            bool2Value = false;

        }


    } else if (tv1 == 'F' && tv2 == 'T') {

        if (v == '^') {

            document.getElementById('bool2').innerHTML = 'F';
            bool2Value = false;

        } else if (v == 'v') {

            document.getElementById('bool2').innerHTML = 'T';
            bool2Value = true;

        } else if (v == 't') {

            document.getElementById('bool2').innerHTML = 'T';
            bool2Value = true;

        } else if (v == 'o') {

            document.getElementById('bool2').innerHTML = 'F';
            bool2Value = false;

        }

    } else if (tv1 == 'F' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool2').innerHTML = 'F';
            bool2Value = false;

        } else if (v == 'v') {

            document.getElementById('bool2').innerHTML = 'F';
            bool2Value = false;

        } else if (v == 't') {

            document.getElementById('bool2').innerHTML = 'T';
            bool2Value = true;

        } else if (v == 'o') {

            document.getElementById('bool2').innerHTML = 'T';
            bool2Value = true;

        }

    }




    document.getElementById('bool2').className = 'tg-sh07 truthvalue';

    document.getElementById('tilde2').disabled = false;

    bool2Fixed = true;

    if ((bool1Fixed == true) && (bool2Fixed == true) && (bool3Fixed == true)) {

        for (var i = 0; i < 4; i++) {
            n[i].disabled = false;
            n[i].value = "?";

        }


    }

 if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'

}




function setOp3() {


    var n = document.getElementsByClassName('drop');
    var v = document.getElementById('3').value;



    var tv1 = document.getElementById('tv3').innerHTML;

    var tv2 = document.getElementById('tv4').innerHTML;

    document.getElementById('3').disabled = true;

    if (tv1 == 'T' && tv2 == 'T') {

        document.getElementById('bool3').innerHTML = 'T';
        bool3Value = true;

    } else if (tv1 == 'T' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool3').innerHTML = 'F';
            bool3Value = false;

        } else if (v == 'v') {

            document.getElementById('bool3').innerHTML = 'T';
            bool3Value = true;

        } else if (v == 't') {

            document.getElementById('bool3').innerHTML = 'F';
            bool3Value = false;

        } else if (v == 'o') {

            document.getElementById('bool3').innerHTML = 'F';
            bool3Value = false;

        }


    } else if (tv1 == 'F' && tv2 == 'T') {

        if (v == '^') {

            document.getElementById('bool3').innerHTML = 'F';
            bool3Value = false;

        } else if (v == 'v') {

            document.getElementById('bool3').innerHTML = 'T';
            bool3Value = true;

        } else if (v == 't') {

            document.getElementById('bool3').innerHTML = 'T';
            bool3Value = true;

        } else if (v == 'o') {

            document.getElementById('bool3').innerHTML = 'F';
            bool3Value = false;

        }

    } else if (tv1 == 'F' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool3').innerHTML = 'F';
            bool3Value = false;

        } else if (v == 'v') {

            document.getElementById('bool3').innerHTML = 'F';
            bool3Value = false;

        } else if (v == 't') {

            document.getElementById('bool3').innerHTML = 'T';
            bool3Value = true;

        } else if (v == 'o') {

            document.getElementById('bool3').innerHTML = 'T';
            bool3Value = true;

        }

    }




    document.getElementById('bool3').className = 'tg-sh07 truthvalue';

    document.getElementById('tilde3').disabled = false;

    bool3Fixed = true;

    if ((bool1Fixed == true) && (bool2Fixed == true) && (bool3Fixed == true)) {

        for (var i = 0; i < 4; i++) {
            n[i].disabled = false;
            n[i].value = "?";

        }


    }
    
     if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'



}


function setOp4() {

    var n = document.getElementsByClassName('drop');
    var v = document.getElementById('4').value;



    var tv1 = document.getElementById('tv5').innerHTML;

    var tv2;

    if (bool1Value == true) {

        tv2 = 'T';

    } else {

        tv2 = 'F';

    }

    document.getElementById('4').disabled = true;

    if (tv1 == 'T' && tv2 == 'T') {

        document.getElementById('bool4').innerHTML = 'T';
        bool4Value = true;

    } else if (tv1 == 'T' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool4').innerHTML = 'F';
            bool3Value = false;

        } else if (v == 'v') {

            document.getElementById('bool4').innerHTML = 'T';
            bool3Value = true;

        } else if (v == 't') {

            document.getElementById('bool4').innerHTML = 'F';
            bool4Value = false;

        } else if (v == 'o') {

            document.getElementById('bool4').innerHTML = 'F';
            bool4Value = false;

        }


    } else if (tv1 == 'F' && tv2 == 'T') {

        if (v == '^') {

            document.getElementById('bool4').innerHTML = 'F';
            bool4Value = false;

        } else if (v == 'v') {

            document.getElementById('bool4').innerHTML = 'T';
            bool4Value = true;

        } else if (v == 't') {

            document.getElementById('bool4').innerHTML = 'T';
            bool4Value = true;

        } else if (v == 'o') {

            document.getElementById('bool4').innerHTML = 'F';
            bool4Value = false;

        }

    } else if (tv1 == 'F' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool4').innerHTML = 'F';
            bool4Value = false;

        } else if (v == 'v') {

            document.getElementById('bool4').innerHTML = 'F';
            bool4Value = false;

        } else if (v == 't') {

            document.getElementById('bool4').innerHTML = 'T';
            bool4Value = true;

        } else if (v == 'o') {

            document.getElementById('bool4').innerHTML = 'T';
            bool4Value = true;

        }

    }




    document.getElementById('bool4').className = 'tg-sh07 truthvalue';

    document.getElementById('tilde4').disabled = false;

    document.getElementById('tilde1').disabled = true;

    bool4Fixed = true;

    if ((bool4Fixed == true) && (bool5Fixed == true) && (bool6Fixed == true) &&
        (bool7Fixed == true)) {

        for (var i = 0; i < 2; i++) {
            n[i].disabled = false;
            n[i].value = "?";

        }


    }
    
     if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'

}


function setOp5() {

    var n = document.getElementsByClassName('drop');
    var v = document.getElementById('5').value;



    var tv1;



    if (bool1Value == true) {

        tv1 = 'T';

    } else {

        tv1 = 'F';

    }

    var tv2;

    if (bool2Value == true) {

        tv2 = 'T';

    } else {

        tv2 = 'F';

    }



    document.getElementById('5').disabled = true;

    if (tv1 == 'T' && tv2 == 'T') {

        document.getElementById('bool5').innerHTML = 'T';
        bool5Value = true;

    } else if (tv1 == 'T' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool5').innerHTML = 'F';
            bool5Value = false;

        } else if (v == 'v') {

            document.getElementById('bool5').innerHTML = 'T';
            bool5Value = true;

        } else if (v == 't') {

            document.getElementById('bool5').innerHTML = 'F';
            bool5Value = false;

        } else if (v == 'o') {

            document.getElementById('bool5').innerHTML = 'F';
            bool5Value = false;

        }


    } else if (tv1 == 'F' && tv2 == 'T') {

        if (v == '^') {

            document.getElementById('bool5').innerHTML = 'F';
            bool5Value = false;

        } else if (v == 'v') {

            document.getElementById('bool5').innerHTML = 'T';
            bool5Value = true;

        } else if (v == 't') {

            document.getElementById('bool5').innerHTML = 'T';
            bool5Value = true;

        } else if (v == 'o') {

            document.getElementById('bool5').innerHTML = 'F';
            bool5Value = false;

        }

    } else if (tv1 == 'F' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool5').innerHTML = 'F';
            bool5Value = false;

        } else if (v == 'v') {

            document.getElementById('bool5').innerHTML = 'F';
            bool5Value = false;

        } else if (v == 't') {

            document.getElementById('bool5').innerHTML = 'T';
            bool5Value = true;

        } else if (v == 'o') {

            document.getElementById('bool5').innerHTML = 'T';
            bool5Value = true;

        }

    }




    document.getElementById('bool5').className = 'tg-sh07 truthvalue';

    document.getElementById('tilde5').disabled = false;

    document.getElementById('tilde1').disabled = true;

    document.getElementById('tilde2').disabled = true;

    bool5Fixed = true;

    if ((bool4Fixed == true) && (bool5Fixed == true) && (bool6Fixed == true) &&
        (bool7Fixed == true)) {

        for (var i = 0; i < 2; i++) {
            n[i].disabled = false;
            n[i].value = "?";

        }


    }
    
     if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'



}


function setOp6() {

    var n = document.getElementsByClassName('drop');
    var v = document.getElementById('6').value;



    var tv1;



    if (bool2Value == true) {

        tv1 = 'T';

    } else {

        tv1 = 'F';

    }

    var tv2;

    if (bool3Value == true) {

        tv2 = 'T';

    } else {

        tv2 = 'F';

    }



    document.getElementById('6').disabled = true;

    if (tv1 == 'T' && tv2 == 'T') {

        document.getElementById('bool6').innerHTML = 'T';
        bool6Value = true;

    } else if (tv1 == 'T' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool6').innerHTML = 'F';
            bool6Value = false;

        } else if (v == 'v') {

            document.getElementById('bool6').innerHTML = 'T';
            bool6Value = true;

        } else if (v == 't') {

            document.getElementById('bool6').innerHTML = 'F';
            bool6Value = false;

        } else if (v == 'o') {

            document.getElementById('bool6').innerHTML = 'F';
            bool6Value = false;

        }


    } else if (tv1 == 'F' && tv2 == 'T') {

        if (v == '^') {

            document.getElementById('bool6').innerHTML = 'F';
            bool6Value = false;

        } else if (v == 'v') {

            document.getElementById('bool6').innerHTML = 'T';
            bool6Value = true;

        } else if (v == 't') {

            document.getElementById('bool6').innerHTML = 'T';
            bool6Value = true;

        } else if (v == 'o') {

            document.getElementById('bool6').innerHTML = 'F';
            bool6Value = false;

        }

    } else if (tv1 == 'F' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool6').innerHTML = 'F';
            bool6Value = false;

        } else if (v == 'v') {

            document.getElementById('bool6').innerHTML = 'F';
            bool6Value = false;

        } else if (v == 't') {

            document.getElementById('bool6').innerHTML = 'T';
            bool6Value = true;

        } else if (v == 'o') {

            document.getElementById('bool6').innerHTML = 'T';
            bool6Value = true;

        }

    }




    document.getElementById('bool6').className = 'tg-sh07 truthvalue';

    document.getElementById('tilde6').disabled = false;

    document.getElementById('tilde2').disabled = true;

    document.getElementById('tilde3').disabled = true;

    bool6Fixed = true;

    if ((bool4Fixed == true) && (bool5Fixed == true) && (bool6Fixed == true) &&
        (bool7Fixed == true)) {

        for (var i = 0; i < 2; i++) {
            n[i].disabled = false;
            n[i].value = "?";

        }



    }

     if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'
}


function setOp7() {

    var n = document.getElementsByClassName('drop');
    var v = document.getElementById('7').value;



    var tv1;



    if (bool3Value == true) {

        tv1 = 'T';

    } else {

        tv1 = 'F';

    }

    var tv2 = document.getElementById('tv6').innerHTML;




    document.getElementById('7').disabled = true;

    if (tv1 == 'T' && tv2 == 'T') {

        document.getElementById('bool7').innerHTML = 'T';
        bool7Value = true;

    } else if (tv1 == 'T' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool7').innerHTML = 'F';
            bool7Value = false;

        } else if (v == 'v') {

            document.getElementById('bool7').innerHTML = 'T';
            bool7Value = true;

        } else if (v == 't') {

            document.getElementById('bool7').innerHTML = 'F';
            bool7Value = false;

        } else if (v == 'o') {

            document.getElementById('bool7').innerHTML = 'F';
            bool7Value = false;

        }


    } else if (tv1 == 'F' && tv2 == 'T') {

        if (v == '^') {

            document.getElementById('bool7').innerHTML = 'F';
            bool7Value = false;

        } else if (v == 'v') {

            document.getElementById('bool7').innerHTML = 'T';
            bool7Value = true;

        } else if (v == 't') {

            document.getElementById('bool7').innerHTML = 'T';
            bool7Value = true;

        } else if (v == 'o') {

            document.getElementById('bool7').innerHTML = 'F';
            bool7Value = false;

        }

    } else if (tv1 == 'F' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool7').innerHTML = 'F';
            bool7Value = false;

        } else if (v == 'v') {

            document.getElementById('bool7').innerHTML = 'F';
            bool7Value = false;

        } else if (v == 't') {

            document.getElementById('bool7').innerHTML = 'T';
            boolV7alue = true;

        } else if (v == 'o') {

            document.getElementById('bool7').innerHTML = 'T';
            bool7Value = true;

        }

    }




    document.getElementById('bool7').className = 'tg-sh07 truthvalue';

    document.getElementById('tilde7').disabled = false;

    document.getElementById('tilde3').disabled = true;

    bool7Fixed = true;

    if ((bool4Fixed == true) && (bool5Fixed == true) && (bool6Fixed == true) &&
        (bool7Fixed == true)) {

        for (var i = 0; i < 2; i++) {
            n[i].disabled = false;
            n[i].value = "?";

        }



    }
    
     if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'

}


function setOp8() {
    var n = document.getElementsByClassName('drop');
    var v = document.getElementById('8').value;



    var tv1;



    if (bool4Value == true) {

        tv1 = 'T';

    } else {

        tv1 = 'F';

    }

    var tv2;

    if (bool5Value == true) {

        tv2 = 'T';

    } else {

        tv2 = 'F';

    }



    document.getElementById('8').disabled = true;

    if (tv1 == 'T' && tv2 == 'T') {

        document.getElementById('bool8').innerHTML = 'T';
        bool8Value = true;

    } else if (tv1 == 'T' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool8').innerHTML = 'F';
            bool8Value = false;

        } else if (v == 'v') {

            document.getElementById('bool8').innerHTML = 'T';
            bool8Value = true;

        } else if (v == 't') {

            document.getElementById('bool8').innerHTML = 'F';
            bool8Value = false;

        } else if (v == 'o') {

            document.getElementById('bool8').innerHTML = 'F';
            bool8Value = false;

        }


    } else if (tv1 == 'F' && tv2 == 'T') {

        if (v == '^') {

            document.getElementById('bool8').innerHTML = 'F';
            bool8Value = false;

        } else if (v == 'v') {

            document.getElementById('bool8').innerHTML = 'T';
            bool8Value = true;

        } else if (v == 't') {

            document.getElementById('bool8').innerHTML = 'T';
            bool8Value = true;

        } else if (v == 'o') {

            document.getElementById('bool8').innerHTML = 'F';
            bool8Value = false;

        }

    } else if (tv1 == 'F' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool8').innerHTML = 'F';
            bool8Value = false;

        } else if (v == 'v') {

            document.getElementById('bool8').innerHTML = 'F';
            bool8Value = false;

        } else if (v == 't') {

            document.getElementById('bool8').innerHTML = 'T';
            bool8Value = true;

        } else if (v == 'o') {

            document.getElementById('bool8').innerHTML = 'T';
            bool8Value = true;

        }

    }




    document.getElementById('bool8').className = 'tg-sh07 truthvalue';



    document.getElementById('tilde4').disabled = true;

    document.getElementById('tilde5').disabled = true;

    bool8Fixed = true;

    if ((bool8Fixed == true) && (bool9Fixed == true)) {

        declareWinner();

    }
    
     else{
        
         if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'
        
    }


}


function setOp9() {

    var n = document.getElementsByClassName('drop');
    var v = document.getElementById('9').value;



    var tv1;



    if (bool6Value == true) {

        tv1 = 'T';

    } else {

        tv1 = 'F';

    }

    var tv2;

    if (bool7Value == true) {

        tv2 = 'T';

    } else {

        tv2 = 'F';

    }



    document.getElementById('9').disabled = true;

    if (tv1 == 'T' && tv2 == 'T') {

        document.getElementById('bool9').innerHTML = 'T';
        bool9Value = true;

    } else if (tv1 == 'T' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool9').innerHTML = 'F';
            bool9Value = false;

        } else if (v == 'v') {

            document.getElementById('bool9').innerHTML = 'T';
            bool9Value = true;

        } else if (v == 't') {

            document.getElementById('bool9').innerHTML = 'F';
            bool9Value = false;

        } else if (v == 'o') {

            document.getElementById('bool9').innerHTML = 'F';
            bool9Value = false;

        }


    } else if (tv1 == 'F' && tv2 == 'T') {

        if (v == '^') {

            document.getElementById('bool9').innerHTML = 'F';
            bool9Value = false;

        } else if (v == 'v') {

            document.getElementById('bool9').innerHTML = 'T';
            bool9Value = true;

        } else if (v == 't') {

            document.getElementById('bool9').innerHTML = 'T';
            bool9Value = true;

        } else if (v == 'o') {

            document.getElementById('bool9').innerHTML = 'F';
            bool9Value = false;

        }

    } else if (tv1 == 'F' && tv2 == 'F') {

        if (v == '^') {

            document.getElementById('bool9').innerHTML = 'F';
            bool9Value = false;

        } else if (v == 'v') {

            document.getElementById('bool9').innerHTML = 'F';
            bool9Value = false;

        } else if (v == 't') {

            document.getElementById('bool9').innerHTML = 'T';
            bool9Value = true;

        } else if (v == 'o') {

            document.getElementById('bool9').innerHTML = 'T';
            bool9Value = true;

        }

    }




    document.getElementById('bool9').className = 'tg-sh07 truthvalue';



    document.getElementById('tilde6').disabled = true;

    document.getElementById('tilde7').disabled = true;

    bool9Fixed = true;

    if ((bool8Fixed == true) && (bool9Fixed == true)) {

        declareWinner();

    }
    
    else{
        
         if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'
        
    }

}


function declareWinner() {

    if (bool8Value == bool9Value) {

        winner = 'True';

        document.getElementById('final').innerHTML = 'T';
    } else {

        winner = 'False';

        document.getElementById('final').innerHTML = 'F';
    }

    document.getElementById("message").innerHTML = winner + ' wins!';
    
    sendInfo();

}

function chBool1() {

    var b = bool1Value;

    if (b == true) {

        bool1Value = false;

        document.getElementById('bool1').innerHTML = 'F';

    } else {

        bool1Value = true;

        document.getElementById('bool1').innerHTML = 'T';

    }

    document.getElementById('tilde1').disabled = true;
    
    if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'


}

function chBool2() {

    var b = bool2Value;

    if (b == true) {

        bool2Value = false;

        document.getElementById('bool2').innerHTML = 'F';

    } else {

        bool2Value = true;

        document.getElementById('bool2').innerHTML = 'T';

    }

    document.getElementById('tilde2').disabled = true;
    
    if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'


}

function chBool3() {

    var b = bool3Value;

    if (b == true) {

        bool3Value = false;

        document.getElementById('bool3').innerHTML = 'F';

    } else {

        bool3Value = true;

        document.getElementById('bool3').innerHTML = 'T';

    }

    document.getElementById('tilde3').disabled = true;
    
    if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'


}

function chBool4() {

    var b = bool4Value;

    if (b == true) {

        bool4Value = false;

        document.getElementById('bool4').innerHTML = 'F';

    } else {

        bool4Value = true;

        document.getElementById('bool4').innerHTML = 'T';

    }

    document.getElementById('tilde4').disabled = true;
    
    if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'


}

function chBool5() {

    var b = bool5Value;

    if (b == true) {

        bool5Value = false;

        document.getElementById('bool5').innerHTML = 'F';

    } else {

        bool5Value = true;

        document.getElementById('bool5').innerHTML = 'T';

    }

    document.getElementById('tilde5').disabled = true;
    
    if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'


}

function chBool6() {

    var b = bool6Value;

    if (b == true) {

        bool6Value = false;

        document.getElementById('bool6').innerHTML = 'F';

    } else {

        bool6Value = true;

        document.getElementById('bool6').innerHTML = 'T';

    }

    document.getElementById('tilde6').disabled = true;
    
    if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'


}

function chBool7() {

    var b = bool7Value;

    if (b == true) {

        bool7Value = false;

        document.getElementById('bool7').innerHTML = 'F';

    } else {

        bool7Value = true;

        document.getElementById('bool7').innerHTML = 'T';

    }

    document.getElementById('tilde7').disabled = true;
    
    if (player == 'True') {

        player = 'False';

    } else {
        player = 'True';
    }

    document.getElementById('message').innerHTML = player + ' plays now.'


}



function reloadPage(){
    
    location.reload(true);
    
}

function startGame() {

    var n = document.getElementsByClassName('drop');

    for (var i = 0; i < 3; i++) {
        n[i].disabled = false;
        n[i].value = "?";

    }

    for (i = 0; i < 7; i++) {

        if (i == 1) {

            var a = Math.floor((Math.random() * 2) + 1);

            if (a == 1) {

                document.getElementById("tv1").innerHTML = "T";

            } else if (a == 2) {

                document.getElementById("tv1").innerHTML = "F";

            }

        }
        if (i == 2) {

            var b = Math.floor((Math.random() * 2) + 1);

            if (b == 1) {

                document.getElementById("tv2").innerHTML = "T";

            } else if (b == 2) {

                document.getElementById("tv2").innerHTML = "F";

            }

        }

        if (i == 3) {

            var c = Math.floor((Math.random() * 2) + 1);

            if (c == 1) {

                document.getElementById("tv3").innerHTML = "T";

            } else if (c == 2) {

                document.getElementById("tv3").innerHTML = "F";

            }

        }

        if (i == 4) {

            var d = Math.floor((Math.random() * 2) + 1);

            if (d == 1) {

                document.getElementById("tv4").innerHTML = "T";

            } else if (d == 2) {

                document.getElementById("tv4").innerHTML = "F";

            }

        }

        if (i == 5) {

            var e = Math.floor((Math.random() * 2) + 1);

            if (e == 1) {

                document.getElementById("tv5").innerHTML = "T";

            } else if (e == 2) {

                document.getElementById("tv5").innerHTML = "F";

            }

        }

        if (i == 6) {

            var f = Math.floor((Math.random() * 2) + 1);

            if (f == 1) {

                document.getElementById("tv6").innerHTML = "T";

            } else if (f == 2) {

                document.getElementById("tv6").innerHTML = "F";

            }

        }


    }

    document.getElementById('message').innerHTML = 'True plays first.'

}

function sendInfo(){

$.ajax({
    type: "POST",
    url: "http://localhost:8080/game",
    data: JSON.stringify({
        falsePlayerUserName: $("#falsePlayerUserName").val(),
        truePlayerUserName: $("#truePlayerUserName").val(),
        winner: winner
        
    }),
   
    success: function () {
 
        
    },
    error: function () {
        alert("FAILURE!");
    }
});
}