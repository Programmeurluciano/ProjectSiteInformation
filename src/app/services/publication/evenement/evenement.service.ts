import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from 'src/app/models/event/event';
import { Evenement } from 'src/app/models/publication/evenement/evenement';
import { ImagePub } from 'src/app/models/image/image-pub';
import { Consigneview } from 'src/app/models/consigneview/consigneview';
import { ConsigneMetier } from 'src/app/models/publication/consigne-metier';

const baseUrl='http://localhost:4333/Publication';
const baseUrlI='http://localhost:4333/Image';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http:HttpClient) { }

 /* addEvenement(data: Evenement):Observable<any>{
    const headers = {'content-type': 'application/json'}
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(`${baseUrl}/Evenement/saveEvent`,body,{'headers':headers});
  }
  */
  
deleteEvenement(id:number):Observable<Object>{
    return this.http.delete(`${baseUrl}/Evenement/DeleteEvent/${id}`);
  }

  updateEvenement(formData:FormData,id:any):Observable<any>{
    return this.http.put(`${baseUrl}/Evenement/Updatevent/${id}`,formData);
  }

  updateEvenementNorm(formData:FormData,id:any):Observable<any>{
    return this.http.put(`${baseUrl}/Evenement/UpdateventNorm/${id}`,formData);
  }

//creation publication avec image
createEvent(formData:FormData,matricule:any):Observable<any>{
  return this.http.post(`${baseUrl}/Evenement/saveEvent/${matricule}`,formData);
}

createCommuniquer(formData:FormData,matricule:any):Observable<any>{
  return this.http.post(`${baseUrl}/Commmuniquer/saveComme/${matricule}`,formData);
}

createConsigneMetier(formData:FormData,matricule:any):Observable<any>{
  return this.http.post(`${baseUrl}/Consigner/saveConsigne/${matricule}`,formData);
}

// creation Event sans image 
creatEventNorm(formData:FormData,matricule:any):Observable<any>{
  return this.http.post(`${baseUrl}/Evenement/saveEventNormal/${matricule}`,formData);
}

creatCommuniNorm(Data:any,matricule:any):Observable<any>{
  return this.http.post(`${baseUrl}/Commmuniquer/saveCommeNormal/${matricule}`,Data);
}

creatConsigneNorm(Data:any,matricule:any):Observable<any>{
  return this.http.post(`${baseUrl}/Consigner/saveConsigneNormal/${matricule}`,Data);
}


//affichage des list EVEnt 

  listImagePub(id: any):Observable<ImagePub[]>{
    return this.http.get<ImagePub[]>(`${baseUrlI}/diplaypubList/${id}`);
  }

  getAllEvenemet():Observable<Evenement[]>{
    return this.http.get<Evenement[]>(`${baseUrl}/Evenement/ToutlesEvenement`);
  }

  getEventByTYpe(type:any):Observable<Evenement[]>{
    return this.http.get<Evenement[]>(`${baseUrl}/Evenement/findBytype/${type}`);
  }

  getEventByTypeAll(type:any):Observable<Event[]>{
    return this.http.get<Evenement[]>(`${baseUrl}/Evenement/findBytypeAll/${type}`);
  }

  getEvenement(id: any):Observable<Object>{
    return this.http.get(`${baseUrl}/Evenement/findbyidEvent/${id}`);
  }

  getAllConsigne(idEmp:any):Observable<Consigneview[]>{
    return this.http.get<Consigneview[]>(`${baseUrl}/ConsigneMetier/AllisConsign/${idEmp}`);
  }

 getAllConsigneView(idEmp:any):Observable<ConsigneMetier[]>{
   return this.http.get<ConsigneMetier[]>(`${baseUrl}/Evenement/AllConsigneMetier/${idEmp}`);
 }

 deleteEVent(id:any):Observable<any>{
   return this.http.get(`${baseUrl}/Evenement/DeleteEvent/${id}`);
 }

 //nombre de  notification
nombreEVent(type:any):Observable<any>{
   return this.http.get(`${baseUrl}/Evenement/EventNumber/${type}`);
}
nombreConsigen(idEmp:any):Observable<any>{
return this.http.get(`${baseUrl}/Evenement/ConsigneNumber/${idEmp}`);}
}
