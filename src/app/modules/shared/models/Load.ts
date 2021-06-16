import { LoadOptions } from "devextreme/data/load_options";

export class LoadParamModel {
  loadOptions: LoadOptions;

  public constructor(loadOptions: any) {
    Object.assign(this, {loadOptions});
  }
}

export class LoadResultModel<T> {
  data: T;
  totalCount: number;

  public constructor(init?: Partial<LoadResultModel<T>>) {
    Object.assign(this, init);
  }
}