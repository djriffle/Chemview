import { Component } from '@angular/core';
const NGL = require('ngl/dist/ngl.js')

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  ngOnInit(){
    var stage = new NGL.Stage("threed",{ backgroundColor: "white" });
    //stage.loadFile("rcsb://1crn", {defaultRepresentation: true});
    stage.loadFile( "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/cocaine/sdf",{ ext: "sdf" } ).then( function( comp ){
      comp.addRepresentation( "ball+stick", { multipleBond: true } );
    } );
    stage.mouseControls.add("drag-left+right", NGL.MouseActions.zoomDrag);
  }

  //SDF

}

