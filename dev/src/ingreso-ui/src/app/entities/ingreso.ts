export class DatosIngreso {

    nombre: string;
    apellido: string;
    dni: string;
    genero: string;
    id: string;
    correos: Array<string>

    constructor(o:object) {
        try {
            Object.assign(this, o);
        } catch(e) {
            console.log(e);
        }
    }
}