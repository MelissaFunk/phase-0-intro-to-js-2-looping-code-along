function countDown (firstNumber) {
    while (firstNumber > 0) {
        console.log(firstNumber);
        firstNumber -= 1;
    }
    console.log(firstNumber)
}

countDown(10);