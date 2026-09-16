export class Escudo {
  private porcentajeReduccion: number;

  constructor(porcentajeReduccion: number) {
    if (porcentajeReduccion < 0 || porcentajeReduccion > 100) {
      throw new Error("El porcentaje de reduccion debe estar entre 0 y 100");
    }
    this.porcentajeReduccion = porcentajeReduccion;
  }

  public aplicar(danio: number): number {
    const reduccion = danio * (this.porcentajeReduccion / 100);
    return danio - reduccion;
  }
}