
const properlyNested = (value) => {

    const possibleOpeningChars = ['{', '[', '(']
    const check = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    let returnValue = 0;
    const pushedOpeningChars = [];

    for (let i = 0; i < value.length; i++) {
        const char = value[i];

        if (i === 0) {
           
            if (possibleOpeningChars.includes(char)) {
                pushedOpeningChars.push(char)
            } 
            continue;
        }

        if (possibleOpeningChars.includes(char)) {
            pushedOpeningChars.push(char)
        } else {
            const lastOpeningValue = pushedOpeningChars[pushedOpeningChars.length - 1];

            if (check[lastOpeningValue] === char) {
                pushedOpeningChars.pop();
                returnValue = 1;
            } else {
                returnValue = 0;
                break;
            }
        }
    }
    return returnValue;
}

module.exports = properlyNested;