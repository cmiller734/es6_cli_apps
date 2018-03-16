    let maxNumLines = 10; //# strings to display
    const lineArr = [...Array(getRandomIntInclusive(2, maxNumLines)).keys()]; //# of lines of #'s that will be displayed
    const joinArr = [...Array(getRandomIntInclusive(2, lineArr.length)).keys()]; //# of lines of #'s that will be joined
    let maxPoundNum = 10 //max # of pound chars to join together on a line
    const poundStrArr = [];
    let minVal=0;
    let maxVal=0;
    
    lineArr.map(num => {
        let poundString = '';
        [...Array(getRandomIntInclusive(1, maxPoundNum)).keys()].forEach(int => {
            poundString += '#';
        });
        poundStrArr.push(poundString);
    });
    
    poundStrArr.sort();
    
    joinArr.forEach((int, i) => {
        minVal += poundStrArr[i].length;
        maxVal += poundStrArr[(poundStrArr.length - i)-1].length;
    });
    
    console.log("Min: " + minVal + ' | ' + "Max: " + maxVal);
    
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

