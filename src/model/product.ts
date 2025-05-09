export class Product{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  img: string;

  constructor(id: number , title: string , price: number , description: string , category: string , img: string){
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.img = img;
  }
}