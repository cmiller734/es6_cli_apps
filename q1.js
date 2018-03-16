    finalString = '';
    [...Array(100).keys()].forEach(item => {
        const isMultipleThree = Number.isInteger(item / 3);
        const isMultipleFive = Number.isInteger(item / 5);
        if (isMultipleThree && isMultipleFive) {
            console.log('Multiple of 3! Multiple of 5!');
        }
        else if (isMultipleThree) {
            console.log('Multiple of 3!');
        } else if (isMultipleFive) { 
            console.log('Multiple of 5!');
        } else {
            console.log(item);
        }
    });
