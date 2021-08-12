function writeCards(stringNames, event){
    let writeCardsNew = []
    for(let i=0; i < stringNames.length; i++){
        writeCardsNew.push(`Thank you, ${stringNames[i]}, for the wonderful ${event} gift!`)
    }
    return writeCardsNew;
}

function countDown (firstNumber) {
    while (firstNumber > 0) {
        console.log(firstNumber);
        firstNumber -= 1;
    }
    console.log(firstNumber);
}
