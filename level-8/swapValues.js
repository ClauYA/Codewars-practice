function swapValues() {
    const args = [...arguments];
    const temp = args[0];
    args[0] = args[1];
    args[1] = temp;
    console.log(args)
    console.log(temp)
}
console.log(swapValues())