export class Vehicle {

  constructor(id: number = 0, nome: string = "", placa: string = "", color: string = "", category: string ="", type: string= "") {

    this.id = id;
    this.nome = nome;
    this.placa = placa;
    this.color = color;
    this.category = category;
    this.type = type;
  }
  public id: number;
  public nome: string;
  public placa: string;
  public color: string;
  public category: string;
  public type: string;

 

}