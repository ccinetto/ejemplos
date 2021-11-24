export class Persona {
    private nombre: string;
    private apellido: string;
    private DNI: string;
  
    constructor(nombre: string, apellido: string, DNI: string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.DNI = DNI;
    }
}