import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
  providers: [ProjectService]
})
export class ProyectoComponent implements OnInit {
  public url: string;
  public project!: Project;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute

  ) { 
    this.url = Global.url;
  }

  ngOnInit(){
    this._route.params.subscribe(params =>{
      let id = params['id'];
      this.getProject(id);
    })
  }

  getProject(id: string){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error =>{
        console.log(<any>error)
      }
    )
  }

}
