var checkPermutation = function(strOne, strTwo) {
    if(strOne.length !== strTwo.length){
        return false;
    }

    else{
        var sortStrOne = strOne.split("").sort().join(''); //split the string -> sort it -> join it
        var sortStrTwo = strTwo.split("").sort().join('');

        return sortStrOne === sortStrTwo;
    }
}

console.log(checkPermutation('ashish', 'ahsish'));