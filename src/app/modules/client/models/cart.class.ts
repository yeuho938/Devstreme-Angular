export class Cart{
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  public constructor(init?: Partial<Cart>) {
    Object.assign(this, init);
  }
}
