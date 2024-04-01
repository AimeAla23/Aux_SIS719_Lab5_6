(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const l: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(l);

  //RESULTADO
  const mailListMetaX: string[] = [
    "email1@gmail.com", 
    "email2@gmail.com", 
    "email3@gmail.com"
  ];

  console.log(mailListMetaX);

  //Lista de compras de un carrito
  const var2: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(var2);
  
  //RESULTADO
  const shoppingList: { product: string }[] = [
    { product: "Switch" },
    { product: "X-box Controller" },
    { product: "Steam Gift Card" }
  ];

  console.log(shoppingList);


  //funcion para sumar mas 3 a un numero y retornarlo
  const fff = (asdfg: number): number => {
    return asdfg + 3;
  }

  console.log(fff(2));
  
  //RESULTADO
  const addThree = (numero: number): number => {
    return numero + 3;
  }

  console.log(addThree(2));

  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capi(w: string): string {
    w.toLowerCase();    
    const c = w.charAt(0).toUpperCase().toString().concat(w.substring(1, w.length));
    return c;
  }

  console.log(capi("capricorn"));

  //RESULTADO
  function capitalizeWord(palabra: string): string {
    const w = palabra.toLowerCase();
    const c = w.charAt(0).toUpperCase() + w.substring(1);
    return c;
  }

  console.log(capitalizeWord("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  let www: boolean = false;

  if(www) console.log('event');

  //RESULTADO
  let eventAlert: boolean = true;

  if (eventAlert) {
    console.log('event');
  }
  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let c: boolean = true;

  if(c) console.log('welcome');
  
  //RESULTADO
  const haveAccess: boolean = true;

  if (haveAccess) console.log('welcome');


  //variable para hallar el promedio de 3 numeros
  const sudo: number = (1 + 2 + 3) / 3;

  console.log(sudo);

  //RESULTADO
  const takeAverage: number = (1 + 2 + 3) / 3;

  console.log(takeAverage);

  
  //variable que almacena el valor de PI
  let pizza: number = 3.141592654;

  console.log(pizza);
  
  //RESULTADO
  const piValue: number = 3.141592654;

  console.log(piValue);

  //variable que controla si un archivo es modificable 
  let Bv: boolean = false;

  if(Bv) console.log('edit this file?');
  
  //RESULTADO
  const isModifiable: boolean = false;

  if (isModifiable) console.log('Edit this file?');
  console.log(isModifiable);


  //variable para almacenar el valor de e
  const eioua: number = 2.718281828; 

  //RESULTADO
  const eulerNumber: number = 2.718281828; 
  console .log(eulerNumber);

})();