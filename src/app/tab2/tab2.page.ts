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
    stage.loadFile( "http://files.rcsb.org/download/1crn.cif" ).then( function( comp ){
      comp.addRepresentation( "surface", { multipleBond: true } );
    } );
    stage.mouseControls.add("drag-left+right", NGL.MouseActions.zoomDrag);
  }

}

