import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../../app/service.service';
import { ProductsLocalServiceService } from './../../products-local-service.service'


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
   results = [];
  constructor(private ServiceService: ServiceService, private productsLocalService: ProductsLocalServiceService) { }
  
  ngOnInit(): void {

    const productsLocal = this.productsLocalService.getProducts();

    if(!productsLocal.length){
    this.ServiceService.getProducts().subscribe((products : any) =>{
        this.results = products;
        this.productsLocalService.addProducts(products)
    })
  }else{  
      this.results = productsLocal;
    }
  }
}
