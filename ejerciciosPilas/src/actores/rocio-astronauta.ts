/// <reference path="ActorAnimado.ts"/>
/// <reference path = "../../dependencias/pilasweb.d.ts"/>

class Astronauta extends ActorAnimado{
	
	ubicacionColumna;
	ubicacionFila;

 	constructor(x, y) {
		super(30, 30, {grilla: 'rocio/nave.png', cantColumnas: 1});
		this.ubicacionFila = x;
		this.ubicacionColumna = y;
		this.escala_x = 0.4;
        this.escala_y = 0.4;
	    }
}

