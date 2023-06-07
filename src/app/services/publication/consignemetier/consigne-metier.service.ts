import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsigneMetier } from 'src/app/models/publication/consigne-metier';

const baseUrl='http://localhost:4333/Publication';

@Injectable({
  providedIn: 'root'
})
export class ConsigneMetierService {

  constructor(private http:HttpClient) { }
  addConsigneMetier(data: ConsigneMetier):Observable<any>{
    const headers = {'content-type': 'application/json'}
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(baseUrl+'/ConsigneMetier/saveConsigne',body,{'headers':headers});
  }

  updateConsigneMetier(data: any ,id:any){
    const headers = {'content-type': 'application/json'}
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.put(`${baseUrl}/ConsignMetier/UpdateConsigneMetier/${id}`,body,{'headers':headers});
  }

  deleteConsigneMetier(id: any):Observable<Object>{
    return this.http.delete(`${baseUrl}/ConsigneMetier/DeleteConsigne/${id}`);
  }

  getConsigneMetier(id: any):Observable<Object>{
    return this.http.get(`${baseUrl}/ConsigneMetier/ByidConsigne/${id}`);
  }
}
