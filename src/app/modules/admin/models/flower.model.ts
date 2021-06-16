
export class Flower{
  id: number;
  name: string;
  description?: string;
  image: string;
  price: number;
  remainingStock: number;
  public constructor(init?: Partial<Flower>) {
    Object.assign(this, init);
  }
}
