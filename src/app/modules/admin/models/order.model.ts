export class Order{
  id: number;
  dataUser: any;
  dataCart: any;
  totalPrice: number;
  public constructor(init?: Partial<Order>) {
    Object.assign(this, init);
  }
}
