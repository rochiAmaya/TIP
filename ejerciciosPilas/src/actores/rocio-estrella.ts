/// <reference path = "../../dependencias/pilasweb.d.ts"/>

class Estrella extends ActorAnimado {

	ubicacionColumna;
	ubicacionFila;

    constructor(x, y) {
        super(x, y, {grilla: 'rocio/star.png', cantColumnas: 1});
    	this.ubicacionFila = x;
		this.ubicacionColumna = y;
        this.escala_x = 0.7;
        this.escala_y = 0.7;
		
        //this.aprender(pilas.habilidades.SeMantieneEnPantalla);
    	this.aprender(pilas.habilidades.PuedeExplotar);
    }
} 


