import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../../app/service.service';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  results: any[] = [];
  constructor(private ServiceService: ServiceService) { }
  
  ngOnInit(): void {
    this.ServiceService.getData()
    .subscribe((data) => {
     this.results.push(data[0], data[1], data[2], data[3], data[4], data[5], data[6],data[7], data[8]);
})}}

