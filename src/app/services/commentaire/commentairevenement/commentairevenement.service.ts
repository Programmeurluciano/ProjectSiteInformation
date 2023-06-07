import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentairevenement } from 'src/app/models/commentaire/commentairevenement/commentairevenement';

const baseUrl='http://localhost:4333/Commetnaire';
//const baseUrl='/api';
@Injectable({
  providedIn: 'root'
})

export class CommentairevenementService {

  constructor(private Http:HttpClient) { }

  createCommentaire(formData:FormData,matricule:any,idEvent:any):Observable<any>{
    return this.Http.post(`${baseUrl}/CommentaireEvent/${matricule}/saveComEvent/${idEvent}`,formData);
  }

  updateCommentaire(formData:FormData,id:any):Observable<any>{
    return this.Http.put(`${baseUrl}/CommentaireEvent/updateCommentEvent/${id}`,formData);
  }

  findbyEventComment(id:any):Observable<Commentairevenement[]>{
    return this.Http.get<Commentairevenement[]>(`${baseUrl}/CommentaireEvenement/FindByidCommentaireEvenement/${id}`);
  }

  findbyidComms(id:any):Observable<Commentairevenement>{
    return this.Http.get<Commentairevenement>(`${baseUrl}/CommentaireEvenement/findByidCom/${id}`);
  }

  deleteComment(id:any):Observable<any> {
    return this.Http.delete<Commentairevenement[]>(`${baseUrl}/CommentaireEvent/DeleteComEvenement/${id}`);
  }
}
