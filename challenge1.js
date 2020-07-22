const triange = (input) => {

    if(input.length < 3) {
        return 0;
    }
    
    const checkTriangularity = (elem1, elem2, elem3) => {
    
        // break the loop as soon as possible
        if(!((elem1 + elem2) > elem3)){
            return 0
        }
        if(!((elem2 + elem3) > elem1)){
            return 0
        }
        if(!((elem3 + elem1) > elem2)){
            return 0
        }
        return 1
    }
    
    for (let i = 0; i < input.length - 2; i++) {
    
        for (let j = i+1; j < input.length - 1; j++) {
            
            for (let k = j+1; k < input.length; k++) {
                if(checkTriangularity(input[i], input[j], input[k])){
                    return 1;
                }
            }
        }
    }

    return 0;
}

module.exports = triange;