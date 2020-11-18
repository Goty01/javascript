function segitiga()
{
    var n = document.getElementById("n").value
    var i,j,k,l;
    var disp = "";

    for (i = 0; i < n; i++){
        for (j = i; j <= n; j++){
            disp += "&nbsp&nbsp";
        }
        for ( k=0; k <= i; k++){
            disp += "*";
        }
        for (l=0;l <= i-1; l++){
            disp += "*";
        }
        disp += "<br>";
    }

    document.getElementById("dispsegitiga").innerHTML = disp;
}
function x()
{
    var a = document.getElementById("a").value
    var i,j;
    var disp = '';


    for (i=1; i <= a; i++){
        for (j=1;j<=a;j++){
            if (i==j||i+j-1==a)
            {
                disp +="*";
            }
            else
            {
                disp +="&nbsp&nbsp";
            }
        }
        disp +="<br>";
    }

    document.getElementById("dispx").innerHTML = disp;
}
function berlian()
{
    var y = document.getElementById("y").value
    var i,j,k,l;
    var disp = '';

    for (i = 0; i < y/2; i++){
        for (j = i; j <= y/2-0.5; j++){
            disp += "&nbsp&nbsp";
        }
        for (k = 0; k <= i; k++){
            disp += "*";
        }
        for (l = 0;l <= i-1; l++){
            disp += "*";
        }
        disp += "<br>";
    }
    for (y/2 <= i-0.5; i <= y; i++){
        for (j = 1; j < i; j++){
            disp += "&nbsp&nbsp";
        }
        for (k = i+1;k <= y; k++){
            disp += "*";
        }
        for (l = i+2;l <= y; l++){
            disp += "*";
        }
        disp += "<br>";
    }

    document.getElementById("dispberlian").innerHTML = disp;
}