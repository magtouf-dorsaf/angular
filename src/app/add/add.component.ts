import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
lv:any ={ "id":0, "nom":""}

  constructor(private gest:GestionService , private route:Router) { }

  ngOnInit(): void {
  }
  ajouter(){
    this.gest.addLivre(this.lv).subscribe(
      {
        next : (data:any) => { this.route.navigate(['id']) ;},
      error : (err:any) => { },
      complete :() => { }
        
      }
    )
  }

}
