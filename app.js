let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let declared = document.getElementById("declared");
let drawer = document.getElementById("drawer");
let reset = document.getElementById("reset");
let rule = 1;
let X = "X";
let O = "O";
declared.innerText = X;

function myfunction1() {
    if (rule == 1) {
        b1.disabled = true;
        b1.innerText = X;
        declared.innerText = O;
        rule = 0;
    } else {
        b1.disabled = true;
        b1.innerText = O;
        declared.innerText = X;
        rule = 1;
    }
    result();
    draw();
}

function myfunction2() {
    if (rule == 1) {
        b2.disabled = true;
        b2.innerText = X;
        declared.innerText = O;
        rule = 0;
    } else {
        b2.disabled = true;
        b2.innerText = O;
        declared.innerText = X;
        rule = 1;
    }
    result();
    draw();

}

function myfunction3() {
    if (rule == 1) {
        b3.disabled = true;
        b3.innerText = X;
        declared.innerText = O;
        rule = 0;
    } else {
        b3.disabled = true;
        b3.innerText = O;
        declared.innerText = X;
        rule = 1;
    }
    result();
    draw();

}

function myfunction4() {
    if (rule == 1) {
        b4.disabled = true;
        b4.innerText = X;
        declared.innerText = O;
        rule = 0;
    } else {
        b4.disabled = true;
        b4.innerText = O;
        declared.innerText = X;
        rule = 1;
    }
    result();
    draw();

}

function myfunction5() {
    if (rule == 1) {
        b5.disabled = true;
        b5.innerText = X;
        declared.innerText = O;
        rule = 0;
    } else {
        b5.disabled = true;
        b5.innerText = O;
        declared.innerText = X;
        rule = 1;
    }
    result();
    draw();

}

function myfunction6() {
    if (rule == 1) {
        b6.disabled = true;
        b6.innerText = X;
        declared.innerText = O;
        rule = 0;
    } else {
        b6.disabled = true;
        b6.innerText = O;
        declared.innerText = X;
        rule = 1;
    }
    result();
    draw();

}

function myfunction7() {
    if (rule == 1) {
        b7.disabled = true;
        b7.innerText = X;
        declared.innerText = O;
        rule = 0;
    } else {
        b7.disabled = true;
        b7.innerText = O;
        declared.innerText = X;
        rule = 1;
    }
    result();
    draw();

}

function myfunction8() {
    if (rule == 1) {
        b8.disabled = true;
        b8.innerText = X;
        declared.innerText = O;
        rule = 0;
    } else {
        b8.disabled = true;
        b8.innerText = O;
        declared.innerText = X;
        rule = 1;
    }
    result();
    draw();

}

function myfunction9() {
    if (rule == 1) {
        b9.disabled = true;
        b9.innerText = X;
        declared.innerText = O;
        rule = 0;
    } else {
        b9.disabled = true;
        b9.innerText = O;
        declared.innerText = X;
        rule = 1;
    }
    result();
    draw();
}



function result() {

    // HORIZONTAL CASE

    if (b1.innerText == X && b2.innerText == X && b3.innerText == X) {
        wonX();
    } else if (b1.innerText == O && b2.innerText == O && b3.innerText == O) {
        wonO();
    } else if (b4.innerText == X && b5.innerText == X && b6.innerText == X) {
        wonX();
    } else if (b4.innerText == O && b5.innerText == O && b6.innerText == O) {
        wonO();
    } else if (b7.innerText == X && b8.innerText == X && b9.innerText == X) {
        wonX();
    } else if (b7.innerText == O && b8.innerText == O && b9.innerText == O) {
        wonO();
    }

    // HORIZONTAL CASE END

    // VERTICAL CASE
    else if (b1.innerText == X && b4.innerText == X && b7.innerText == X) {
        wonX();
    } else if (b1.innerText == O && b4.innerText == O && b7.innerText == O) {
        wonO();
    } else if (b2.innerText == X && b5.innerText == X && b8.innerText == X) {
        wonX();
    } else if (b2.innerText == O && b5.innerText == O && b8.innerText == O) {
        wonO();
    } else if (b3.innerText == X && b6.innerText == X && b9.innerText == X) {
        wonX();
    } else if (b3.innerText == O && b6.innerText == O && b9.innerText == O) {
        wonO();
    }

    // VERTICAL CASE END

    // DIAGONAL CASE
    else if (b1.innerText == X && b5.innerText == X && b9.innerText == X) {
        wonX();
    } else if (b1.innerText == O && b5.innerText == O && b9.innerText == O) {
        wonO();
    } else if (b3.innerText == X && b5.innerText == X && b7.innerText == X) {
        wonX();
    } else if (b3.innerText == O && b5.innerText == O && b7.innerText == O) {
        wonO();
    }


    // DIAGONAL CASE END

}

function wonO() {
    declared.innerText = "PLAYER O WiN";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
}

function wonX() {
    declared.innerText = "PLAYER X WiN";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
}

function myfunctionreset() {
    b1.innerText = "";
    b1.disabled = false;
    b2.innerText = "";
    b2.disabled = false;
    b3.innerText = "";
    b3.disabled = false;
    b4.innerText = "";
    b4.disabled = false;
    b5.innerText = "";
    b5.disabled = false;
    b6.innerText = "";
    b6.disabled = false;
    b7.innerText = "";
    b7.disabled = false;
    b8.innerText = "";
    b8.disabled = false;
    b9.innerText = "";
    b9.disabled = false;
    rule = 1;
    declared.innerText = X;
}

function draw() {
    if ((b1.innerText == X || b1.innerText == O) && (b2.innerText == X || b2.innerText == O) && (b3.innerText == X || b3.innerText == O) && (b4.innerText == X || b4.innerText == O) && (b5.innerText == X || b5.innerText == O) && (b6.innerText == X || b6.innerText == O) && (b7.innerText == X || b7.innerText == O) && (b8.innerText == X || b8.innerText == O) && (b9.innerText == X || b9.innerText == O)) {
        declared.innerText = "MATCH DRAW";
    }
}