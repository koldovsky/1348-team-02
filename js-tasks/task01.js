// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
    if (num > 0) {
        return -num;
    } else {
        return num;
    }
}

// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move (position, roll) {
    return position + (roll * 2);
}

// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet (name, owner) {
    if(name === owner){
        return "Hello boss";
    }else{
        return "Hello guest";
    }
}

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
    if(time >= 1){
        return Math.floor(time / 2);
    }else{
        return 0;
    }
}

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2){
    if(flower1 % 2 !== flower2 % 2){
        return true;
    }else{
        return false;
    }
}