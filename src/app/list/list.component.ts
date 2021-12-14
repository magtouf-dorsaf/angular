import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
liste:any=[]
  constructor(private gest:GestionService) { 
    this.getLivres();
    this.delete();
  }

  ngOnInit(): void {
  }
  getLivres(){
    this.gest.getAllLivres().subscribe(
      {
        next : (data:any) => { this.liste = data; },
        error : (err:any) => { },
        complete :()=> { }
      }
    )
  }

  delete(){
    this.gest.deletLivre(this.liste.id).subscribe(
      {
        next : (data:any) => { this.route.navigate(['id']) ;},
        error : (err:any) => { },
        complete :()=> { }
      }
    )
  }

}
