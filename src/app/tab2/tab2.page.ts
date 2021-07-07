import { Component } from '@angular/core';
import { PubchemService } from '../services/pubchem.service';
import { CurrentChemService } from '../services/current-chem.service';
const NGL = require('ngl/dist/ngl.js')

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //the div that that ngl projects onto
  stage

  constructor(private pubchem: PubchemService, private currentChem:CurrentChemService) {}

  ngOnInit(){
    this.stage = new NGL.Stage("threed",{ backgroundColor: "white" });
    this.stage.mouseControls.add("drag-left+right", NGL.MouseActions.zoomDrag);

    this.refreshView()
  }

  ionViewWillEnter(){
    this.refreshView()
    console.log("test")
  }

  refreshView(){
    this.stage.removeAllComponents()
    console.log(this.currentChem.getName( ))
    this.stage.loadFile(this.pubchem.getSDFLink(this.currentChem.getName()),{ ext: "sdf" } ).then( function( comp ){
      comp.addRepresentation( "ball+stick", { multipleBond: true } );
    } );
    //TODO investigate this as a possible way to save an image to the phone
    this.stage.makeImage()
  }

  search(term){
    this.currentChem.setName(term)
    this.refreshView()
  }

  //SDF

}

