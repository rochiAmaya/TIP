/// <reference path="ActorAnimado.ts"/>
class Policia extends ActorAnimado{
	
	ubicacionColumna;
	ubicacionFila;

 	constructor(x, y) {
		super(0, 0, {grilla: 'rocio/policiaSecuencia.png', cantColumnas: 2});
		this.ubicacionFila = x;
		this.ubicacionColumna = y;
	    this.radio_de_colision = 11;
	    this.escala_y = 0.2;
		this.escala_x = 0.2;		

	    this.definirAnimacion("parado",[0],5);

	    //this.definirAnimacion("pasar",[0,1,1,0],15);

	    }


	meDejaPasar(){
		return (Math.floor((Math.random() * 10) + 1)%2)==1;
	}

	 argumentosDejarPasar(){
        return {grilla: 'rocio/policiaSecuencia.png', cantColumnas: 2};
    }

}

