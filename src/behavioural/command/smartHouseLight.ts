// receiver
export class SmartHouseLight {
  private isOn = false;
  private intensite = 50;

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'ligado' : 'desligado';
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} agora está LIGADO`);
    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;
    console.log(`${this.name} agora está DESLIGADO`);
    return this.isOn;
  }

  increaseIntensity(): void {
    if (this.intensite >= 100) {
      console.log(`${this.name} já está com a intensidade máxima`);
      return;
    }
    this.intensite++;
    console.log(`Intensidade agora está ${this.intensite}`);
  }

  decreaseIntensity(): void {
    if (this.intensite <= 0) {
      console.log(`${this.name} já está com a intensidade mínima`);
      return;
    }
    this.intensite--;
    console.log(`Intensidade agora está ${this.intensite}`);
  }
}
