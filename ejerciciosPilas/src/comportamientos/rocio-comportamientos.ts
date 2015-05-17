/// <reference path = "../../dependencias/pilasweb.d.ts"/>

class EsperaAnimada extends Animar {

  
  velocidad;
  sonido;

  iniciar(receptor) {
    super.iniciar(receptor);
    this.velocidad = this.argumentos.velocidad || 5;   
    this.sonido = pilas.sonidos.cargar(this.argumentos.sonido);
    this.sonido.reproducir();
  }

  actualizar() {

    return super.actualizar();
  }
}


class RecogerEstrella extends Comportamiento {

  iniciar(receptor) {
    super.iniciar(receptor);
  }

  actualizar() {
    var estrellas = pilas.obtener_actores_con_etiqueta("Estrella");
    
    if (estrellas.lenght > 0){
      
      var estrellaActual = pilas.obtener_actores_en(this.receptor.x, this.receptor.y, "Estrella")
      estrellaActual[0].eliminar();

      return true;
    }
    return false;
  }
}