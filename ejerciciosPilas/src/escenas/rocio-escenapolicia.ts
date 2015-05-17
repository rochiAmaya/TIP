/// <reference path = "../../dependencias/pilasweb.d.ts"/>
/// <reference path = "../actores/rocio-autito.ts"/>
/// <reference path = "../actores/rocio-policia.ts"/>
/// <reference path = "../actores/Cuadricula.ts"/>


/**
 * @class EscenaPolicia
 * 
 */
class EscenaPolicia extends Base {
    fondo;
    autito;
    cuadricula;
    policias;
        
    iniciar() {
        this.fondo = new Fondo('rocio/pradera.jpg',0,0); 
        this.fondo.escala_x = 1.2;
        this.fondo.escala_y = 1.2;    

        this.cuadricula = new Cuadricula(0,-100,1,7,
            {alto: 70},
            {grilla: 'rocio/callecasilla.png', 
            cantColumnas: 7})

        this.autito = new Autito(0,0);
        this.autito.setCuadricula(this.cuadricula,0,0);
        

        this.policias = []
        this.policias.push(new Policia(0,2))
        this.policias.push(new Policia(0,5))

        for (var i = this.policias.length - 1; i >= 0; i--) {
            this.policias[i].setCuadricula(this.cuadricula,this.policias[i].ubicacionFila,this.policias[i].ubicacionColumna)
        };

    }
    
    irDerecha(){
        this.autito.hacer_luego(MoverACasillaDerecha);
    }
    
    tocandoPolicia(){
        return this.autito.colisiona_con(this.policias[0]) ||  this.autito.colisiona_con(this.policias[1])
    }

    esperar(){
        this.autito.hacer_luego(EsperaAnimada,this.autito.argumentosEspera());
    }

    policiaDiceQueEspere(){
        var respuesta = (this.tocandoPolicia() && (this.policias[0].dejaPasar()|| this.policias[1].dejaPasar()));
        return  respuesta;    
    }
    //esta seria la solucion esperada, dentro de un recorrido.
    tengoQueEsperar(){
        if(this.policiaDiceQueEspere()){
            this.esperar();
        }else{
            this.irDerecha();
        }
    }

//var e = pilas.mundo.gestor_escenas.escena_actual()   
                //e.martillar()     
}