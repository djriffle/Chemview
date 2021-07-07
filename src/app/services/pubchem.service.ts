import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PubchemService {

  constructor(private http:HttpClient) { }


  async getSmiles(query:string){
    //Gets the canonical
    let chemJson = await this.http.get('https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/'+query+'/json').toPromise()
    let smiles = await chemJson["PC_Compounds"][0].props[18].value.sval
    console.log(chemJson)
    return await smiles
  }

  async getSmilesIsomeric(query:string){
    //Gets the isomeric smile
    let chemJson = await this.http.get('https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/'+query+'/json').toPromise()
    let smiles = await chemJson["PC_Compounds"][0].props[19].value.sval
    console.log(smiles)
    return await smiles
  }

  getSDFLink(query:string){
    return "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/"+query+"/sdf"

  }
}
