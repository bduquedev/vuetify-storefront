interface IShipping {
  id: string;
  name: string;
  cost: number;
  countries: string[];
}

export class Shipping implements IShipping {
  id: string;
  name: string;
  cost: number;
  countries: string[];

  /**
   *
   */
  constructor(id: string, name: string, cost: number, countries: string[]) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.countries = countries;
  }
}

interface IStall {
  id: string;
  name: string;
  description: string;
  currency: string;
  shipping: Shipping[];
}

export class Stall implements IStall {
  id: string;
  name: string;
  description: string;
  currency: string;
  shipping: Shipping[];

  /**
   *
   */
  constructor(
    id: string,
    name: string,
    description: string,
    currency: string,
    shipping: Shipping[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.currency = currency;
    this.shipping = shipping;
  }
}

interface IProduct {
  id: string;
  product_id: string;
  stall_id: string;
  name: string;
  description: string;
  images: string[];
  currency: string;
  price: number;
  quantity: number;
  specs: string[][];
  tags: string[][];
}

export class Product implements IProduct {
  id: string;
  product_id: string;
  stall_id: string;
  name: string;
  description: string;
  images: string[];
  currency: string;
  price: number;
  quantity: number;
  specs: string[][];
  tags: string[][];

  /**
   *
   */
  constructor(
    id: string,
    product_id: string,
    stall_id: string,
    name: string,
    description: string,
    images: string[],
    currency: string,
    price: number,
    quantity: number,
    specs: string[][],
    tags: string[][]
  ) {
    this.id = id;
    this.product_id = product_id;
    this.stall_id = stall_id;
    this.name = name;
    this.description = description;
    this.images = images;
    this.currency = currency;
    this.price = price;
    this.quantity = quantity;
    this.specs = specs;
    this.tags = tags;
  }
}

export interface IContent {
  id: string;
  stall_id: string;
  name: string;
  description: string;
  images: string[];
  currency: string;
  price: number;
  quantity: number;
}