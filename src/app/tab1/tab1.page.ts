import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
const NGL = require('ngl/dist/ngl.js')
const SmilesDrawer = require('smiles-drawer/app.js')

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  deviceWidth: number;
  deviceHeight: number;

  constructor(
    private platform: Platform,
  ) {
    this.deviceHeight = platform.height()
    this.deviceWidth = platform.width()
  }

  ngOnInit(){

    var stage = new NGL.Stage("3d",{ backgroundColor: "white" });
    //stage.loadFile("rcsb://1crn", {defaultRepresentation: true});
    stage.loadFile( "http://files.rcsb.org/download/1crn.cif" ).then( function( comp ){
      comp.addRepresentation( "surface", { multipleBond: true } );
    } );
    stage.mouseControls.add("drag-left+right", NGL.MouseActions.zoomDrag);

    // let options = {
    //   width: this.deviceWidth,
    //   height: this.deviceHeight
    // };
    // let smilesDrawer = new SmilesDrawer.Drawer(options);
    // SmilesDrawer.parse('COC(=O)C1C(CC2N(C1CC2)C)OC(=O)c1ccccc1', function (tree) {
    //   smilesDrawer.draw(tree, 'twod', 'light', false);
    //   }, function (err) {
    //       console.log(err);
    //   })
    }
  

}
