/// <reference path = "../../dependencias/pilasweb.d.ts"/>
/// <reference path = "../actores/rocio-estrella.ts"/>
/// <reference path = "../actores/rocio-astronauta.ts"/>
/// <reference path = "../actores/Cuadricula.ts"/>


/**
 * @class EscenaAstronauta
 * 
 */
class EscenaAstronauta extends Base {
    fondo;
    robot;
    cuadricula;
    estrellas;
    countEstrellas;
        
    iniciar() {
        this.fondo = new Fondo('rocio/fondoEspacio.png',0,0);     

        this.cuadricula = new Cuadricula(0,0,3,6,
            {alto: 140},
            {grilla: 'casillaLightbot.png', 
            cantColumnas: 5, alto:50, ancho:55
            })
        
        this.robot = new Astronauta(0,0);
        this.robot.setCuadricula(this.cuadricula,0,0);

        this.estrellas = []
        this.estrellas.push(new Estrella(0,2))
        this.estrellas.push(new Estrella(0,5))

        for (var i = this.estrellas.length - 1; i >= 0; i--) {
            this.estrellas[i].setCuadricula(this.cuadricula,this.estrellas[i].ubicacionFila,this.estrellas[i].ubicacionColumna)
        };

        this.countEstrellas = 0;

    }
    
    irArriba(){
        this.robot.hacer_luego(MoverACasillaArriba);
    }
    irAbajo(){
        this.robot.hacer_luego(MoverACasillaAbajo);
    }
    irDerecha(){
        this.robot.hacer_luego(MoverACasillaDerecha);
    }
    irIzquierda(){
        this.robot.hacer_luego(MoverACasillaIzquierda);
    }
    
    tocandoEstrella(){
        //'ni idea'
    }

    sumarEstrella(){
        //this.robot.hacer_luego(SumarEstrella) //esto deberia ser un comportamiento ?
    }


}