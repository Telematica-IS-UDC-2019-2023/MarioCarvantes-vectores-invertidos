class Vector {
    constructor(){
        this.array;
    }
    full(array){
        this.array = array;
        for(let i = 0; i <= 10; i++){
            array[i] = ( i + 1)
        }
        for( let a = 0; a <= array.length; a++){
            if((array[a] % 2) != 0){
                array.splice(a,1)
            }
        }
    }
    mostrar() {
        return (this.array);
    }
    invertirVector(){
        for(let i = 0; i <= this.array.length; i++){
            let contrario = [(this.array.length -1)]
            this.array.splice(i,0,contrario)
            this.array.splice((this.array.length -1), 1)
            return (this.array)
        }
    }
    girarIzquierda() {
        let Inicial = this.array[0];
        this.array.splice(this.array.length, 0, Inicial);
        this.array.splice(0, 1);
        return (this.array);
    }
    girarDerecha() {
        let Final = this.array[(this.array.length - 1)];
        this.array.splice(0, 0, Final);
        this.array.splice((this.array.length - 1), 1);
        return (this.array);
    }
}

let vector = new Vector;
vector.full(new Array);

console.log (`estos son los 10 numeros pares ${vector.mostrar()}`)

console.log (`estos son los numeros invertidos ${vector.invertirVector()}`)

console.log (`estos son los numeros rotados hacia la izquierda ${vector.girarIzquierda()}`)

console.log (`estos son los numeros rotados a la derecha ${vector.girarDerecha()}`)