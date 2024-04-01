(function () {
    /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES
       ADEMAS DE COMPROBAR SI USA LET O CONST,
      SE PUEDE REFACTORIZAR, ETC.
    */
    //lista de emails de usuarios de Meta-X
    var l = [
        "email1@gmail.com",
        "email1@gmail.com",
        "email1@gmail.com"
    ];
    console.log(l);
    //RESULTADO
    var mailListMetaX = [
        "email1@gmail.com",
        "email2@gmail.com",
        "email3@gmail.com"
    ];
    console.log(mailListMetaX);
    //Lista de compras de un carrito
    var var2 = [
        { product: "switch" },
        { product: "X-box Controller" },
        { product: "steam-gift-card" },
    ];
    console.log(var2);
    //RESULTADO
    var shoppingList = [
        { product: "Switch" },
        { product: "X-box Controller" },
        { product: "Steam Gift Card" }
    ];
    console.log(shoppingList);
    //funcion para sumar mas 3 a un numero y retornarlo
    var fff = function (asdfg) {
        return asdfg + 3;
    };
    console.log(fff(2));
    //RESULTADO
    var addThree = function (numero) {
        return numero + 3;
    };
    console.log(addThree(2));
    //funcion para capitalizar una palabra pasara por params
    //idente o refactorice de ser necesario
    //el resultado no deberia cambiar
    function capi(w) {
        w.toLowerCase();
        var c = w.charAt(0).toUpperCase().toString().concat(w.substring(1, w.length));
        return c;
    }
    console.log(capi("capricorn"));
    //RESULTADO
    function capitalizeWord(palabra) {
        var w = palabra.toLowerCase();
        var c = w.charAt(0).toUpperCase() + w.substring(1);
        return c;
    }
    console.log(capitalizeWord("capricorn"));
    //variable que alerta en caso de que algun evento suceda
    var www = false;
    if (www)
        console.log('event');
    //RESULTADO
    var eventAlert = true;
    if (eventAlert) {
        console.log('event');
    }
    //variable que se encarga de verificar 
    //si un usuario puede acceder o no
    var c = true;
    if (c)
        console.log('welcome');
    //RESULTADO
    var haveAccess = true;
    if (haveAccess)
        console.log('welcome');
    //variable para hallar el promedio de 3 numeros
    var sudo = (1 + 2 + 3) / 3;
    console.log(sudo);
    //RESULTADO
    var takeAverage = (1 + 2 + 3) / 3;
    console.log(takeAverage);
    //variable que almacena el valor de PI
    var pizza = 3.141592654;
    console.log(pizza);
    //RESULTADO
    var piValue = 3.141592654;
    console.log(piValue);
    //variable que controla si un archivo es modificable 
    var Bv = false;
    if (Bv)
        console.log('edit this file?');
    //RESULTADO
    var isModifiable = false;
    if (isModifiable)
        console.log('Edit this file?');
    console.log(isModifiable);
    //variable para almacenar el valor de e
    var eioua = 2.718281828;
    //RESULTADO
    var eulerNumber = 2.718281828;
    console.log(eulerNumber);
})();
