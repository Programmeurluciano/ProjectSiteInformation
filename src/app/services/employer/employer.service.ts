import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employer } from 'src/app/models/employer/employer';
import { Infostat } from 'src/app/models/infostat/infostat';
import { Employers } from 'src/app/models/model/employers';
import { Infostatage } from 'src/app/models/infostatage/infostatage';
const baseUrl='http://localhost:4333/Employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http:HttpClient) { }

  createEmployer(formData:FormData):Observable<any>{
    return this.http.post(baseUrl+'/saveEmployerProfil',formData);
  }

  getAllEmployer():Observable<Employer[]>{
    return this.http.get<Employer[]>(baseUrl+'/ToutlesEmployer');
  }

  updateEmployer(formData:FormData,id:any):Observable<any>{
    return this.http.put(`${baseUrl}/UpdateEmployerProfil/${id}`,formData);
  }

  TransferEmployer(id:any,formData:any):Observable<any>{
    return this.http.put(`${baseUrl}/sauvegarde/${id}`,formData);
  }

  getEmployer(id:any):Observable<Object>{
    return this.http.get(`${baseUrl}/EmployerByid/${id}`);
  }

  getEmployerDept(id:any):Observable<Employer[]>{
    return this.http.get<Employer[]>(`${baseUrl}/getBydept/${id}`);
  }
  
  getInfostat():Observable<Infostat>{
    return this.http.get<Infostat>(`${baseUrl}/getcount`);

  }
 

  getInfostatage():Observable<Infostatage>{
    return this.http.get<Infostatage>(`${baseUrl}/countageAll`);

  }

  DeleteEMployer(id:any):Observable<any>{
    return this.http.delete(`http://localhost:4333/auth/DeleteUser/${id}`);
  }
}
