/// <reference path = "../../dependencias/pilasweb.d.ts" />
/// <reference path="ActorAnimado.ts"/>
/// <reference path = "../comportamientos/Animar.ts"/>

class Autito extends ActorAnimado{
	 constructor(x, y) {
		super(x, y, {grilla: 'rocio/carRed.png', cantColumnas: 1});

		this.escala_y = 1.5;
		this.escala_x = 2;		
		this.definirAnimacion("parado",[0],5);
		this.radio_de_colision = 15;

	    }


	    argumentosEspera(){
	    	 return {grilla: 'rocio/carRed.png', cantColumnas: 1, sonido:'saltar.wav'}; 

	    	 //TOdo replace por imagen de espera (autito tirando humo). y sonido cdo pueda compilar pilasweb 'rocio/bocina.wav'
	    }
}
