import { Component, OnInit } from '@angular/core';
interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  opinions: string;
}

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  newProduct: Product = {
    name: '',
    price: undefined,
    description: '',
    image: '',
    opinions: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
