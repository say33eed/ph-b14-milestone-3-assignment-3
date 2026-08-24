function bonusScore(scores) {

    if (!Array.isArray(scores) ||
        scores.length === 0){
        return "Invalid"
    }


    for(let score of scores){
        if(!Number.isFinite(score)){
            return "Invalid";
        }
    }

    // let isEntriesValid = scores.every(score => Number.isFinite(score));
    // //console.log(isEntriesValid);

    // if(!isEntriesValid){
    //     return "Invalid";
    // }


    return scores.reduce((initialScore, currentScore) => initialScore = initialScore + 10 + currentScore, 0);
    //console.log(scoreAfterBonus);
}

//console.log(bonusScore(new Array(3)));
