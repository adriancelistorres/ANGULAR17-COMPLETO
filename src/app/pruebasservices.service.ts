import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebasservicesService {

  constructor( private http: HttpClient) { }

  setToken() {
    
    if (typeof localStorage !== 'undefined') {
      return localStorage.setItem('token', '1234567890');

    } else {
      console.log('')
      return {}
    }
  }
  // getToken() {
  //   if (typeof localStorage !== 'undefined') {
  //     return localStorage.setItem('token', '1234567890');

  //   } else {
  //     console.log('')
  //     return {}
  //   }  }

  getDataWithToken(): Observable<any> {
    // Obtener el token del localStorage
    // const token = localStorage.getItem('token');
    
    // // Crear el encabezado con el token
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    // Realizar la solicitud HTTP con el encabezado
    
    return this.http.get<any>(`api/Incentivos/ruta-de-tu-api`);
  }
}
