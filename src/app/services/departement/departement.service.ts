import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from 'src/app/models/departement/departement';

const baseUrl='http://localhost:4333/Departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient) { }


  
  getAllDepartement():Observable<Departement[]>{
    return this.http.get<Departement[]>(baseUrl+'/Alldepartement');
  }

 createDepartement(data: Departement):Observable<any>{
  const headers = {'content-type': 'application/json'}
  const body=JSON.stringify(data);
   console.log(body)
   return this.http.post(baseUrl+'/SaveDept',body,{'headers':headers});
 }

  deleteDepartement(id: any):Observable<any>{
    return this.http.delete(`${baseUrl}/DeleteDepartement/${id}`);
  }

  getDepartement(id: any):Observable<Object>{
    return this.http.get(`${baseUrl}/FindByidDepartement/${id}`);
  }

  updateDepartement(data: any ,id: any):Observable<any>{
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(data);
    console.log(body)
    return this.http.put(`${baseUrl}/UpdateDepartement/${id}`,body,{'headers':headers});
  }
}
