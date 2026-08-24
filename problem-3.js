function countHashtags(caption) {
    if(typeof caption !== "string"){
        return "Invalid";
    }

    //Splitting the string into an array

    let wordsInCaption = caption.split(" ");
    //console.log(wordsInCaption);



    //Filtering the words with hashtags
    let wordsWithHashtag = wordsInCaption.filter(word => word.startsWith("#"));
    //console.log(wordsWithHashtag);

    //Finding the longest hash tag
    let longestHashtag = wordsWithHashtag.reduce((longestWord, currentWord) =>{
        if(currentWord.length > longestWord.length){
            return currentWord;
        }
        return longestWord;
    },"");

    //console.log(longestHashtag);
    
    return{
        hashtagCount: wordsWithHashtag.length,
        longestTag: longestHashtag.slice(1)
    }
}

//console.log(countHashtags("#a   #bbb"));

//Probable troublesome case
// #
