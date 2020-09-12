import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get(baseUrl + 'products');
  }
}
