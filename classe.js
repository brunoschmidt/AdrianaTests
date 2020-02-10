
class MyBase {
    constructor() {
        this.y = 20;
    }

    get_y() {
        return this.y;
    }
}

class MyClass extends MyBase {
    constructor() {
        super();
        this.x = 10;
    }

    get_x() {
        return this.x;
    }
}


function MinhaBase() {
    this.y = 20;
}
MinhaBase.prototype.get_y = function () {
        return this.y;
};

function MinhaClasse() {
    this.x = 10;
}
MinhaClasse.prototype = new MinhaBase();
MinhaClasse.prototype.get_x = function () {
        return this.x;
};


console.log(new MyClass());


const objeto = new MinhaClasse();
console.log(objeto, objeto.get_x(), objeto.get_y());