import { Injectable } from '@angular/core';
import {Trabajos} from './trabajos';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TrabajosService {

  private URL = 'https://jobfluent-c5deb.firebaseio.com/trabajos';
  constructor(private http: HttpClient) { }

  getTrabajos(){

  }

  getTrabajo(){

  }

  updateTrabajo(){
    
  }

  saveTrabajo(){

  }

  deleteTrabajo(){

  }

}
