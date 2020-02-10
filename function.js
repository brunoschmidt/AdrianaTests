

function Teste(){
    this.prop = ["ok"];

}

Teste.prototype.teste = function teste(){

    this.prop.forEach( function(item) {
        console.log( arguments );
    });

}

function lista() {
    console.log( Array.prototype.join.call(arguments, '') ); // arguments.join('')
}

function listaNova(x, ...lista) {
    console.log( x, lista.join('') );
}


listaNova(1,2,3,4,5)