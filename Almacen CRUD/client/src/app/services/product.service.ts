import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = '/api/products'
  }

  getListProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

  deleteProduct(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
  }

  saveProduct(product: Product): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, product);
  }

  getProduct(id: string | number): Observable<Product> {
    return this.http.get<Product>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  updateProduct(id: number | string, product: Product): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, product);
  }

}
