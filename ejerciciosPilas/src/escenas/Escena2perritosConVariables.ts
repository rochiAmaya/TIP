/// <reference path = "../../dependencias/pilasweb.d.ts"/>
/// <reference path = "../actores/rocio-perrito.ts"/>
/// <reference path = "../actores/Cuadricula.ts"/>


/**
 * @class EscenaAstronauta
 * 
 */
class Escena2PerritosConVariables extends Base {
    
    fondo;
    perrito1;
    perrito2
    cuadricula;
    alturaP1;
    alturaP2;
    
        
    iniciar() {
        this.fondo = new Fondo('fondos/fondoObrero.png',0,0);     

        this.cuadricula = new Cuadricula(0,0,1,2,
            {},
            {grilla: 'casillaLightbot.png', 
            cantColumnas: 5,
            ancho:100,
            alto:150})
        
        this.perrito1 = new Perrito(0,0);
        this.perrito1.setCuadricula(this.cuadricula,0,0);

        this.perrito2 = new Perrito(50,0);
        this.perrito2.setCuadricula(this.cuadricula,0,1);

        this.alturaP1 = 10; //Todo random

        this.alturaP2 = 15; //TODO bis

    }
    
    alturaPerrito1(){
        this.alturaP1;
    }
    alturaPerrito2(){
        this.alturaP2;
    }
}