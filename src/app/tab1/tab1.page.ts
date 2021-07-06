import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
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



    let options = {
      width: this.deviceWidth,
      height: this.deviceHeight,
      compactDrawing: false,
      terminalCarbons: true,
      explicitHydrogens: true,
    };
    let smilesDrawer = new SmilesDrawer.Drawer(options);
    SmilesDrawer.parse('C=O', function (tree) {
      smilesDrawer.draw(tree, 'twod', 'light', false);
      }, function (err) {
          console.log(err);
      })
    }
  

}
