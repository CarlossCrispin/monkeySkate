export class User {
    constructor(
        // numero aleatorio del 1 al 100 y metodo floor redondea asia bajo 
        public _id: number = Math.floor(Math.random() * 100),
        public nombre: string = "",
        public marca: string = "",
        public descripcion: string = "",
        public precio: number = 0,
        public editable: boolean = false
    ) {

    }
}