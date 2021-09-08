import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PubchemService } from '../services/pubchem.service';
import { CurrentChemService } from '../services/current-chem.service';
import { FavoriteService } from '../services/favorite.service';

import { ModalController } from '@ionic/angular';
import { TwodSettingsPage } from '../popups/twod-settings/twod-settings.page';
import { Settings,DefaultSettings } from '../models/settings';
import { SettingsService } from '../services/settings.service';

const SmilesDrawer = require('smiles-drawer/app.js')

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  popSearch = true
  searchQuery:string;

  //used to draw 2d figure
  smilesDrawer;
  //is the current chemical a favorite? TODO implement this
  favorite:boolean = false 
  settings:Settings = new DefaultSettings

  constructor(private platform: Platform,
    private pubchem: PubchemService, 
    private currentChem:CurrentChemService,
    private favoriteService: FavoriteService,
    public modalController: ModalController,
    private settingsService:SettingsService) 
  {
    
  }

  async ngOnInit(){
    this.settings = await this.settingsService.init()
    await this._setSettingDimensions()
    this.smilesDrawer = await new SmilesDrawer.Drawer(this.settings);
  }

  private _setSettingDimensions(){
    this.settings.height = this.platform.height()
    this.settings.width = this.platform.width()
  }

  ionViewWillEnter(){
    this.checkIfFavorite()
    this.refreshView()
  }

  refreshDrawer(){
    this.smilesDrawer = new SmilesDrawer.Drawer(this.settings)
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
    this.checkIfFavorite()
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
    else{
      this.favorite = false
    }
  }

  removeFavorite(){
    this.favoriteService.removeFavorite(this.currentChem.getName())
    this.favorite = false
  }

  async showSettings(){
    const modal = await this.modalController.create({
      component: TwodSettingsPage,
    });
    modal.onWillDismiss().then(data=>{
      this.settings = this.settingsService.getSettings()
      console.log(this.settings)
      this.refreshDrawer()
      this.refreshView()
    })
    return await modal.present();
  }
}
