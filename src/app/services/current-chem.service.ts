import { Injectable } from '@angular/core';
import { PubchemService } from './pubchem.service';
@Injectable({
  providedIn: 'root'
})
export class CurrentChemService {
  
  name:string = "Methane";
  formula:string = "C";

  constructor(private pubchem:PubchemService) { }

  getName(){
    return this.name
  }

  getFormula(){
    return this.formula
  }

  async setFormula(){
    this.formula = await this.pubchem.getMolecularFormula(this.name)
  }

  async setName(newName:string){
    this.name = newName
    await this.setFormula()
  }
  
}
