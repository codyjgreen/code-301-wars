



function mutateMyStrings(stringOne, stringTwo) {
    let strOne = stringOne.split('');
    let strTwo = stringTwo.split('');
    let mutate = stringOne.concat('\n');
    for (let i = 0; i < strOne.length; i++) {
        if (strOne[i] !== strTwo[i]) {
            strOne[i] = strTwo[i];
            mutate = mutate.concat(`${strOne.join('')}\n`);
        }
    }
    return mutate;
}