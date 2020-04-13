var person = {
    firstName : "Joana",
    lastName  : "D'Arc",
    fullName  : function() {
        // Notou o uso do "this" tal como se usou "ela" no exemplo da frase anterior?
        console.log( this.firstName + ' ' + this.lastName );
 
        // Também poderia se ter escrito:
        console.log( person.firstName + ' ' + person.lastName );
    }
}

person.fullName();