export class Trabajos {
    constructor(public id: string,
                public nombre: string, 
                public descripcion: string, 
                public imglink: string,
                public ciudad: string,
                public skills: string[],
                public salario: number | undefined){}
}
