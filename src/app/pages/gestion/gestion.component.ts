import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsLocalServiceService } from 'src/app/products-local-service.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  inputName;
  description;
  price;
  stars;
  imgUrl;
  
  FormGroupManagementPage;

  constructor(private FormBuilder: FormBuilder, private productsLocalService: ProductsLocalServiceService) { }

  ngOnInit(): void {
    this.FormGroupManagementPage = this.FormBuilder.group({
      name: ['Product'],
      description: ['Description'],
      price: ['5'],
      image: ['https://images-na.ssl-images-amazon.com/images/I/61-ty-pKigL._AC_UX385_.jpg'],
      stars: ['5'],
  })

}

addProduct(){
  this.productsLocalService.addProducts([this.FormGroupManagementPage.value])
}



}
