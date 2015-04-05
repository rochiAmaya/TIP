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