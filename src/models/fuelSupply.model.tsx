export class fuelSupply {

  constructor(id: number, vehicle: number, typeFuel: string, kilometers: string, priceLiter: number, payment: number, date: number) {

    this.id = id;
    this.vehicle = vehicle;
    this.typeFuel = typeFuel;
    this.kilometers = kilometers;
    this.priceLiter = priceLiter;
    this.payment = payment;
    this.priceLiter = priceLiter;
    this.date = date;
  }
  public id: number;
  public vehicle: number;
  public typeFuel: string;
  public kilometers: string;
  public priceLiter: number;
  public payment: number;
  public date: number;

 

}