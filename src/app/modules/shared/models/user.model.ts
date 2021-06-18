export class UserModel{
  id: number;
  username: string;
  password: string;
  email: string;
  address: string;
  public constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
  }
}
