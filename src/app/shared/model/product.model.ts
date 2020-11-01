
export interface IProduct {
    id?: number,
    name?: string,
    description?: string,
    price?: number,
    quantity?: number,
    backorderLimit?: number,
    backorded?: boolean,
    // warehouse?: IWarehouse,
}

export class Product implements IProduct {
  constructor(
      public id?: number,
      public name?: string,
      public description?: string,
      public price?: number,
      public quantity?: number,
      public backorderLimit?: number,
      public backorded?: boolean,
    //   public warehouse?: IWarehouse,
  ) {}
}