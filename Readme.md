## SOLID
PRINCIPIOS SOLID
Los principios SOLID, introducidos por Robert C. Martin en los años 90, son fundamentales en el desarrollo de software orientado a objetos. Este conjunto de 5 principios promueve la creación de código limpio, modular y mantenible.
1. Principio de Responsabilidad Única (SRP)
Establece que una clase debe tener una única responsabilidad, es decir, solo debería haber una razón para cambiarla. Esto significa que una clase debe tener un único motivo para cambiar, lo que ayuda a mantener el código modular y fácil de mantener.
// Separación de responsabilidades en dos clases distintas
class Empleado {
    calcularSueldo() {
        // lógica de cálculo del sueldo
    }
}

class GeneradorInforme {
    generarInforme() {
        // lógica de generación de informes
    }
}

2. Principio de Abierto/Cerrado (OCP)
Establece que una clase debe estar abierta para la extensión pero cerrada para la modificación. Esto significa que se deben poder añadir nuevas funcionalidades sin necesidad de modificar el código existente. Este principio fomenta el uso de la herencia, la composición y el polimorfismo para lograr la extensibilidad del código.

// Uso de polimorfismo para evitar modificaciones en el método calcularArea
class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }
}

class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
}

class AreaCalculator {
    calcularArea(forma) {
        return forma.calcularArea();
    }
}


3. Principio de Sustitución de Liskov (LSP)
Establece que los objetos de un programa deberían ser sustituibles por instancias de sus subtipos sin alterar la corrección del programa. En otras palabras, una clase derivada debe poder reemplazar a su clase base sin que el comportamiento del programa cambie. Este principio garantiza que la herencia se utilice correctamente y que las clases se comporten de manera coherente.

// Corrigiendo la violación del principio de LSP
interface Ave {
    void volar();
}

class Pajaro implements Ave {
    public void volar() {
        // lógica de vuelo
    }
}

class Pinguino implements Ave {
    public void volar() {
        // los pingüinos no vuelan, pero implementan el método volar para cumplir con la interfaz
        System.out.println("Los pingüinos no pueden volar");
    }
}


4. Principio de Segregación de la Interfaz (ISP)
Establece que los clientes no deberían estar obligados a depender de interfaces que no utilicen. En lugar de tener interfaces grandes y monolíticas, se deben dividir en interfaces más pequeñas y específicas que representen un conjunto coherente de funcionalidades. Esto evita que los clientes dependan de funcionalidades que no necesitan y promueve una mejor modularidad y cohesión del código.

// Segregando la interfaz en interfaces más específicas
interface Trabajador {
    void trabajar();
}

interface Persona {
    void comer();

    void dormir();
}


5. Principio de Inversión de Dependencias (DIP)
Establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones. Además, las abstracciones no deben depender de los detalles, sino de otras abstracciones. Esto promueve el desacoplamiento entre los componentes del sistema y facilita la sustitución de implementaciones concretas sin afectar a otros componentes del sistema.

// Utilizando abstracciones para cumplir con el principio de DIP
interface Switch {
    void encender();
}

class Lampara {
    Switch interruptor;

    public Lampara(Switch interruptor) {
        this.interruptor = interruptor;
    }

    public void encender() {
        interruptor.encender();
    }
}

class Interruptor implements Switch {
    public void encender() {
        // lógica de encendido
    }
}

Esta investigación proporciona una visión general de los principios SOLID utilizando Markdown, lo que facilita su comprensión y lectura.