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
    this.name = this._standardizeChemicalName(newName)
    await this.setFormula()
  }
  /**
   * turns the chemical names from what ever input into all lowercase with capitcal first letters
   */
  private _standardizeChemicalName(name:string){
    let standardName = name.toLowerCase()
    return standardName.charAt(0).toUpperCase() + standardName.slice(1)
  }
  
}
