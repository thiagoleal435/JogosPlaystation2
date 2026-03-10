var i;
i=0;

function frente(){
   if (i == 0)
   {
    document.all.teste.src='../ghostRider/ghostRider.html';
    i=1;
    }
    else if (i == 1){
    document.all.teste.src='../godHand/godHand.html';
    i=2;
    }
    else if (i == 2){
    document.all.teste.src='../godOfWar2/godOfWar.html';
    i=3;
    }
    else if (i == 3){
    document.all.teste.src='../gtaSanAndreas/gtaSanAndreas.html';
    i=4;
    }
    else if (i == 4){
    document.all.teste.src='../medalOfHonor/medalOfHonor.html';
    i=5;
    }
    else if (i == 5){
    document.all.teste.src='../mortalKombat/mortalKombat.html';
    i=6;
    }
    else if (i == 6){
    document.all.teste.src='../residentEvil4/residentEvil4.html';
    i=7;
    }
    else{
    document.all.teste.src='../urbanReign/urbanReign.html';
    i=0;
    }
}

function atras(){
   if (i == 7){
    document.all.teste.src='../urbanReign/urbanReign.html';
    i=6;
    }
    else if (i == 6){
    document.all.teste.src='../residentEvil4/residentEvil4.html';
    i=5;
    }
    else if (i == 5){
    document.all.teste.src='../mortalKombat/mortalKombat.html';
    i=4;
    }
    else if (i == 4){
    document.all.teste.src='../medalOfHonor/medalOfHonor.html';
    i=3;
    }
    else if (i == 3){
    document.all.teste.src='../gtaSanAndreas/gtaSanAndreas.html';
    i=2;
    }
    else if (i == 2){
    document.all.teste.src='../godOfWar2/godOfWar2.html';
    i=1;
    }
    else{
    document.all.teste.src='../godHand/godHand.html';
    i=0;
    }
}

function tempo(){
   setInterval("frente()",4000);
}