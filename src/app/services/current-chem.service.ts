import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentChemService {
  
  name:string = "THC";

  constructor() { }

  getName(){
    return this.name
  }

  setName(newName:string){
    this.name = newName
  }
  
}
