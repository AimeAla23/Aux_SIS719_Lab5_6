(() => {

  /* APLICA DRY */
  
  //EX - 1

  function calculateOperation1(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  function calculateOperation2(x: number, y: number, z: number): number {
    let sumResult = x + y;
    let multiplicationResult = sumResult * z;
    return multiplicationResult;
  }

  //RESULTADO
  function calculateOperation(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }


  // EX - 2
  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }

  //RESULTADO
  function calculateArea(shape: string, ...args: number[]): number {
    switch (shape.toLocaleLowerCase()){
      case 'rectangule':
        return args[0] * args[1];
      case 'circle':
        return Math.PI * args[0] * args[0];
      default:
        throw new Error('No valida la forma geometrica');
    }
  }

  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  function validateEmail(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  }

  //RESULTADO
  function validateField(field: string): boolean {
    //...some code for validate here
    return false;
  }

})();