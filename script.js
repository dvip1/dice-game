
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
function rollDice2() {
    return Math.floor(Math.random() * 6) + 1;
}
function one_to_six(i){
   if(i==1)return "one";
    else if(i==2)return "two";
    else if(i==3)return "three";
    else if(i==4)return "four";
    else if(i==5)return "five";
    else if(i==6)return "six";
}
function dicegame(){
    const temp=rollDice();
    const temp1=rollDice2();
    document.querySelector("strong").setAttribute("class", "fa-solid fa-dice-"+one_to_six(temp));
    document.querySelector("i").setAttribute("class", "fa-solid fa-dice-"+one_to_six(temp1));
    if  (temp<temp1){
        document.querySelector("h1").innerHTML = "Player 1 wins";
    }
    else if(temp>temp1){
        document.querySelector("h1").innerHTML = "Player 2 wins";
        }
    else{
        document.querySelector("h1").innerHTML = "Draw";
    }
    }
