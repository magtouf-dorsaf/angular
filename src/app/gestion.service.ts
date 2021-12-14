import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient){}
  getAllLivres(){
    return this.http.get("http://localhost:8080/livres");
  }
  addLivre(liv:any){
    return this.http.post("http://localhost:8080/addLivre",liv);
  }
  deletLivre(id:number){
    return this.http.delete("http://localhost:8080/deleteLivre/"+id)
  }
}