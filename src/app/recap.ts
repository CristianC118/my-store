

// Variables en TS
const username= 'cristian'; //es un string

const username2: string= 'cristian2'; //es un string

const username3: string | number= 'cristian3'; //es un string y un número


// Función Flecha
const sum= (a: number, b: number) =>{
  return a + b;
}

sum(1,2);

// Forma 1
//Inicialización de clase
class Person {
  // Encapsulamiento
  private age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age= age;
    this.lastName= lastName;
  }
}

const cristian= new Person(15, 'Cristaldo');

cristian.age;


// Forma 2
class Alumno {
  //constructor //si pongo el alcance como parametro, la variable se crea y se autoasigna con el parametro
  constructor(public anio: number, public lastname: string) {}
}

//Instanciación
const alexis= new Alumno(17, 'Hoshizora')

alexis.anio;


/*a las funciones tambien se les puede asignar el valor que devolverán desde
ellas mismas, poniendo el tipo de devolucion luego de los parámetros*/
const suma2 = ( a : number , b: number):number => a + b
const saludar = (nombre: string , edad: number ):string => `Hola me llamo ${nombre} y tengo ${edad} años`
