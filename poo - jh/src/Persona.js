//1.Crear la clase persona
export default class Persona{
    //2.crear las propiedades
    #identificacion
    #nombres
    #apellidos
    #edad
    #correo
    #celular
    #estatura

    //3.Crear el CONSTRUCTOR
    constructor(identificacion, nombres, apellidos, edad, correo, celular, estatura){
        this.#identificacion = identificacion;
        this.#nombres = nombres;
        this.#apellidos = apellidos;
        this.#edad = edad;
        this.#correo = correo;
        this.#celular = celular;
        this.#estatura = estatura;
    }
    //#region
    //4. crear los get/set
    get identificacion() {return this.#identificacion}
    get apellidos() {return this.#apellidos}
    get nombres() {return this.#nombres}
    get edad() {return this.#edad}
    get correo() {return this.#correo}
    get celular() {return this.#celular}
    get estatura() {return this.#estatura}
    //#endregion

    //5.crear los metodos
    mostrarDatos(){
        return`
        *****Datos de la persona*****
            identificacion--> ${this.#identificacion}
            Apellidos-------> ${this.#apellidos}
            Nombres---------> ${this.#nombres}
            Edad------------> ${this.#edad}
            Celular---------> ${this.#celular}
            Correo----------> ${this.#correo}
            Estatura--------> ${this.#estatura}
            ------Fin Datos------
            `
    }
}
