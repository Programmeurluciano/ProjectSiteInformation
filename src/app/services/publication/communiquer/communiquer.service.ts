import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Communiquer } from 'src/app/models/publication/communiquer/communiquer';

const baseUrl='http://localhost:4333/Publication';

@Injectable({
  providedIn: 'root'
})
export class CommuniquerService {

  constructor(private http:HttpClient) { }
  addCommuniquer(data: Communiquer):Observable<any>{
    const headers = {'content-type': 'application/json'}
   const body=JSON.stringify(data);
   console.log(body)
   return this.http.post(baseUrl+'/Communiquer/saveCommuniquer',body,{'headers':headers});
  }

  updateCommuniquer(data: any ,id:any):Observable<any>{
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(data);
    console.log(body)
    return this.http.put(`${baseUrl}/Communiquer/UpdateCommuniquer/${id}`,body,{'headers':headers});
  }

  deleteCommuniquer(id: any):Observable<any>{
    return this.http.delete(`${baseUrl}/Communiquer/DeleteCommuniquer/${id}`);
  }
  getCommuniquer(id: any):Observable<Object>{
    return this.http.get(`${baseUrl}/Communiquer/BYidCommuniquer/${id}`);
  }
}
