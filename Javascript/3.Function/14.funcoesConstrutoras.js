function Carro(velocidadeMaxima = 200, delta = 5) {
    //Atributo privado
    let velocidadeAtual = 0;
    //Método público
    this.acelerar = () => {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    };
    //Método público
    this.getVelocidadeAtual = () => velocidadeAtual;

}

const uno = new Carro;   //aqui ele vai utilizar o padrão definido na função
uno.acelerar ();
uno.acelerar ();
uno.acelerar ();
uno.acelerar ();
uno.acelerar ();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(300, 25);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
