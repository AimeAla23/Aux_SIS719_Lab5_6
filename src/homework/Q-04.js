(function () {
    /* APLICA DRY */
    //EX - 1
    function calculateOperation1(a, b, c) {
        var sumResult = a + b;
        var multiplicationResult = sumResult * c;
        return multiplicationResult;
    }
    function calculateOperation2(x, y, z) {
        var sumResult = x + y;
        var multiplicationResult = sumResult * z;
        return multiplicationResult;
    }
    //RESULTADO
    function calculateOperation(a, b, c) {
        var sumResult = a + b;
        var multiplicationResult = sumResult * c;
        return multiplicationResult;
    }
    // EX - 2
    function calculateRectangleArea(length, width) {
        return length * width;
    }
    function calculateCircleArea(radius) {
        return Math.PI * radius * radius;
    }
    //RESULTADO
    function calculateArea(shape) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        switch (shape.toLocaleLowerCase()) {
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
    function validateEmail(email) {
        //...some code for validate here
        return false;
    }
    function validateUsername(username) {
        //...some code for validate here
        return false;
    }
    //RESULTADO
    function validateField(field) {
        //...some code for validate here
        return false;
    }
})();
