import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  productList: Array <product> = []
  ngOnInit(): void {
    let item1: product;
    let item2: product;
    let item3: product;
    let item4: product;
    item1 = {img: "./../assets/img/pescado.png", name: "Sandwich Pescado", description: "Pescado, queso, papas y bedida", price:36}
    item2 = {img: "./../assets/img/pescado2.png", name: "Sandwich Pescado Doble", description: "Pescado doble, queso, papas y bedida", price:43}
    item3 = {img: "./../assets/img/big.png", name: "Big Mac", description: "Doble carne, queso, papas y bebida", price:80}
    item4 = {img: "./../assets/img/big2.png", name: "Big Mac Doble", description: "Carne cuadrule, doble queso, papas y bebida", price:88}
    this.productList.push(item1);
    this.productList.push(item2);
    this.productList.push(item3);
    this.productList.push(item4);
    console.log(this.productList)
  }
  title = 'desired';
}

interface product{
  img: string;
  name: string;
  description: string;
  price: number;
}
