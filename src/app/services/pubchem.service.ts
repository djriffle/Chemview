import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PubchemService {

  constructor(private http:HttpClient) { }


  async getSmiles(query:string){
    //TODO right now this gets isomers there should be an option to get the non isomer
    let chemJson = await this.http.get('https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/'+query+'/json').toPromise()
    let smiles = await chemJson["PC_Compounds"][0].props[18].value.sval
    console.log(smiles)
    return await smiles
  }

  async getSDF(){

  }
}
