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

  constructor(private pubchem: PubchemService, private currentChem:CurrentChemService) {}

  ngOnInit(){
    var stage = new NGL.Stage("threed",{ backgroundColor: "white" });
    //stage.loadFile("rcsb://1crn", {defaultRepresentation: true}); 
    stage.loadFile(this.pubchem.getSDFLink(this.currentChem.getName()),{ ext: "sdf" } ).then( function( comp ){
      comp.addRepresentation( "ball+stick", { multipleBond: true } );
    } );
    stage.mouseControls.add("drag-left+right", NGL.MouseActions.zoomDrag);
  }

  //SDF

}

