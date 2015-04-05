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

	    this.definirAnimacion("pasar",[1],15);

	    }


	dejaPasar(){
		var result = (Math.floor((Math.random() * 2) + 1)%2)==1;
		if(result === false){
			this.detener_animacion();
			this.cargarAnimacion("pasar");
		}else{
			this.detener_animacionN("pasar");
			this.cargarAnimacion("parado");
		}
		return result
	}

}

