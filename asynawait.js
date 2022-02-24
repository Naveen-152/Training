var x = async () => {
    var y = 2+2;
    var z = await y;
    return y;
}
x().then((data) => {
    console.log(data);
});