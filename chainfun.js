var x = function () {
    this.i=0;
    this.add = function (num) {
        this.i += num;
        return this;
    }
    this.sub = function (num) {
        this.i -=num;
        return this;
    }
    this.print = () => {
        console.log(this.i);
    }
}
var y = new x();
y.add(3).sub(2).print();