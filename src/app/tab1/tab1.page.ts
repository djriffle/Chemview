import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PubchemService } from '../services/pubchem.service';
import { CurrentChemService } from '../services/current-chem.service';
import { FavoriteService } from '../services/favorite.service';
const SmilesDrawer = require('smiles-drawer/app.js')

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  deviceWidth: number;
  deviceHeight: number;
  popSearch = true
  searchQuery:string;


  options = {
    width: 1000,
    height: 1000,
    //compactDrawing: false,
    // terminalCarbons: true,
    // explicitHydrogens: true,
  };
  
  //used to draw 2d figure
  smilesDrawer;
  //is the current chemical a favorite? TODO implement this
  favorite:boolean = false 

  constructor(private platform: Platform,
    private pubchem: PubchemService, 
    private currentChem:CurrentChemService,
    private favoriteService: FavoriteService) {
    
  }

  ngOnInit(){
    this.deviceHeight = this.platform.height()
    this.deviceWidth = this.platform.width()

    this.options.height = this.deviceHeight
    this.options.width = this.deviceWidth
    this.smilesDrawer = new SmilesDrawer.Drawer(this.options);

    
    }

    ionViewWillEnter(){
      this.checkIfFavorite()
      this.refreshView()
    }

  refreshView(){
    let self = this
    this.pubchem.getSmiles(this.currentChem.getName()).then(smiles =>{
      SmilesDrawer.parse(smiles, function (tree) {
        self.smilesDrawer.draw(tree, 'twod', 'light', false);
        }, function (err) {
            console.log(err);
        })
  
      }
    )
  }

  search(event){
    this.currentChem.setName(this.searchQuery)
    this.refreshView()
  }

  addFavorite(){
    this.favoriteService.addFavorite(this.currentChem.getName())
    this.favorite = true
  }

  checkIfFavorite(){
    //Checks if current chem is a favorite
    if(this.favoriteService.favoritesContains(this.currentChem.getName())){
      this.favorite = true
    }
  }

  removeFavorite(){
    this.favoriteService.removeFavorite(this.currentChem.getName())
    this.favorite = false
  }
}
