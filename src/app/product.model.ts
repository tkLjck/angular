export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public smalldesc: string,
    public price: number,
    public quantity: number,
    public imgUrls: string[],
    ){

    }
}
