import { Arma } from "./armas/Arma";
import { Escudo } from "./Escudo";

export abstract class Unidad {
  protected vida: number;
  protected escudo: Escudo | null = null;
  protected arma: Arma | null = null;

  constructor(vidaInicial: number) {
    this.vida = vidaInicial;
  }

  public asignarEscudo(escudo: Escudo): void {
    this.escudo = escudo;
  }

  public asignarArma(arma: Arma): void {
    this.arma = arma;
  }

  public recibirDisparo(danio: number): void {
    if (!this.estaVivo()) {
      return; // ya está muerta, no le pasa nada
    }

    const danioFinal = this.escudo ? this.escudo.aplicar(danio) : danio;
    this.vida -= danioFinal;

    if (this.vida < 0) {
      this.vida = 0;
    }
  }

  public disparar(objetivo: Unidad): void {
    if (!this.arma) {
      throw new Error("Esta unidad no tiene arma asignada");
    }
    const danio = this.arma.disparar();
    objetivo.recibirDisparo(danio);
  }

  public estaVivo(): boolean {
    return this.vida > 0;
  }

  public getVida(): number {
    return this.vida;
  }
}