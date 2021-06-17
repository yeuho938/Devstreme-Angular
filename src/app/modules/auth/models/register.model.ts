export class UserRegisterModel {
  userName: string;
  password: string;
  email: string;
  address?: string;
  constructor(init?: Partial<UserRegisterModel>) {
    Object.assign(this, init);
  }
}
