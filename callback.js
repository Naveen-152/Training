function result(data) {
    console.log(data);
}
function add(a,b,callback) {
    var c = a+b;
    callback(c);
}
add(3,5,result);