/// <reference path = "../../dependencias/pilasweb.d.ts"/>
/// <reference path = "../actores/rocio-estrella.ts"/>
/// <reference path = "../actores/rocio-astronauta.ts"/>
/// <reference path = "../comportamientos/rocio-comportamientos.ts"/>
/// <reference path = "../actores/Cuadricula.ts"/>


/**
 * @class EscenaAstronauta
 * 
 */
class EscenaAstronauta extends Base {
    fondo;
    astronauta;
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
        
        this.astronauta = new Astronauta(0,0);
        this.astronauta.setCuadricula(this.cuadricula,0,0);

        this.estrellas = []
    
        this.estrellas.push(new Estrella(this.nroFila(),this.nroColumna()));
        this.estrellas.push(new Estrella(this.nroFila(),this.nroColumna()));
        this.estrellas.push(new Estrella(this.nroFila(),this.nroColumna()));

        for (var i = this.estrellas.length - 1; i >= 0; i--) {
            if(this.estrellas[i].ubicacionFila===0 && this.estrellas[i].ubicacionColumna===0){
                this.estrellas[i].ubicacionFila=1;
            }
            this.estrellas[i].setCuadricula(this.cuadricula,this.estrellas[i].ubicacionFila,this.estrellas[i].ubicacionColumna);
        };

        this.countEstrellas = 0;

    }
    
    nroFila(){
        return Math.floor((Math.random() * 3));
    }

    nroColumna(){
        return Math.floor((Math.random() * 6));
    }

    irArriba(){
        this.astronauta.hacer_luego(MoverACasillaArriba);
    }
    irAbajo(){
        this.astronauta.hacer_luego(MoverACasillaAbajo);
    }
    irDerecha(){
        this.astronauta.hacer_luego(MoverACasillaDerecha);
    }
    irIzquierda(){
        this.astronauta.hacer_luego(MoverACasillaIzquierda);
    }
    
    tocandoEstrella(){
        return (this.astronauta.colisiona_con(this.estrellas[0]) ||  this.astronauta.colisiona_con(this.estrellas[1]) || this.astronauta.colisiona_con(this.estrellas[2]));
    }
    agarrarEstrella(){
        this.astronauta.hacer_luego(RecogerEstrella);   
    }

    quitarEstrella(){
        this.irDerecha();
        if(this.tocandoEstrella()){
            this.agarrarEstrella();
        }
    }
    sumarEstrella(){
        //this.astronauta.hacer_luego(SumarEstrella) //esto deberia ser un comportamiento ?
    }


}


