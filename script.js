//RETRIVING THE THE RESULT FROM THE WEBSITE
const score=JSON.parse(localStorage.getItem('score')) || {wins:0, loses:0, ties:0};

//UPDATING THE SCORE IN THE PARA
updatescore()

//PLAYERMOVE AND COMPUTERMOVE
function playgame(playermove){
    const computermove=pickcomputermove();
    let result = '';

    //BASICS MECHANISM OF THE GAME BY NESTED IF
    if(playermove==='rock'){
        if (computermove==='Rock'){
        result='ITS A TIE';
        }
        else if(computermove==='Paper'){
        result='YOU LOSE'
        }
        else if(computermove==='Scissors'){
        result='YOU WIN'
        }
    }else if(playermove==='scissors'){
        if (computermove==='Rock'){
        result='YOU LOSE';
        }
        else if(computermove==='Paper'){
            result='YOU WIN'
        }
        else if(computermove==='Scissors'){
            result='ITS A TIE'
        }
    }else if(playermove==='paper'){
            if (computermove==='Rock'){
            result='YOU WIN';
        }
        else if(computermove==='Paper'){
            result='ITS A TIE'
        }
        else if(computermove==='Scissors'){
            result='YOU LOSE'
        }
    }   
    if(result==='YOU WIN'){
        score.wins++
    }else if(result==='YOU LOSE'){
        score.loses++
    }else if(result==='ITS A TIE'){
        score.ties++
    }

    //STORAGE OF THE RESULT
    localStorage.setItem('.score', JSON.stringify(score));

    //DISPLAYING THE RESULT
    document.querySelector('.result').innerHTML=`${result}`

    //DISPLAYING THE MOVES
    document.querySelector('.moves').innerHTML=`You
    <img class="img" src="Images/${playermove}-emoji.png" alt="">
    <img class ='img' src="Images/${computermove}-emoji.png" alt="">
    Comp`

    //DISPAYING OF THE SCORE IN THE WEBSITE
    updatescore()
}

//RANDOMIZING THE COMPUTER MOVE BY RANDOM METHOD
function pickcomputermove(){
    const randomnumber=Math.random();
    let computermove='';
    if(randomnumber>=0 && randomnumber<1/3){
        computermove='Rock'
    }else if(randomnumber>=1/3 && randomnumber<2/3){
        computermove='Paper';
    }else if (randomnumber>=2/3 && randomnumber<1){
        computermove='Scissors';
    }
    return computermove;
}
function updatescore() {
    document.querySelector('.score').innerHTML=`Wins:${score.wins} Loses:${score.loses} Ties:${score.ties}`
}