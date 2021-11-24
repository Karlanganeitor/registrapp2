import { Component, OnInit } from '@angular/core';
import { APIClientService } from 'src/app/services/apiclient.service';
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
})
export class AsistenciaComponent implements OnInit {user:any;
  users:any;
  posts:any;
  post:any={
    id:null,
    title:"",
    body:"",
    userId:null
  };
  constructor(private api:APIClientService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ionViewWillEnter(){
    this.getUsuarios();
    this.getPosts();
  }
  getPosts() { 
    this.api.getPosts().subscribe((data)=>{
    this.posts=data;
    this.posts.reverse();
  });
  }

  getUsuarios(){
    this.api.getUsuarios().subscribe((data)=>{
      this.users=data;
    });
    
  }
  getUsuario(userId){
    this.api.getUsuario(userId).subscribe((data)=>{
      this.user=data;
    });
    
  }

}
