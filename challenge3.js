
const arrayDominator = (input) => {
    const temp = {};

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (temp[element]) {
            temp[element] = temp[element] + 1
            if (temp[element] > (input.length / 2)) {
                return i;
            }
        } else {
            temp[element] = 1
        }
    }
    return -1;
}

module.exports = arrayDominator;