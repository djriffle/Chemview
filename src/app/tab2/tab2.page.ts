import { Component } from '@angular/core';
import { PubchemService } from '../services/pubchem.service';
import { CurrentChemService } from '../services/current-chem.service';
import { FavoriteService } from '../services/favorite.service';

import { ToastController } from '@ionic/angular';

const NGL = require('ngl/dist/ngl.js')


class TouchListener{
  constructor(private text:string){

  }
  apply(){
    console.log(this.text)
  }
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  //the div that that ngl projects onto
  stage
  //used to fix search bar not non-focussing glitch
  popSearch:boolean = true
  //
  searchQuery: string;

  favorite:boolean = false

  constructor(private toastController: ToastController, private pubchem: PubchemService, private currentChem:CurrentChemService, private favoriteService: FavoriteService) {}


  async ngOnInit(){
    this.stage = new NGL.Stage("threed",{ backgroundColor: "white" });
    this.stage.mouseControls.add("drag-right", NGL.MouseActions.rotateDrag);
    this.stage.mouseControls.add("drag-left+right", NGL.MouseActions.zoomDrag);
  }

  ionViewWillEnter(){
    this.refreshView()
    this.checkIfFavorite()
    console.log("test")
  }

  ionViewDidEnter(){
    this.presentToast()
  }

  refreshView(){
    this.stage.removeAllComponents()
    console.log(this.currentChem.getName( ))
    let self = this
    this.stage.loadFile(this.pubchem.getSDFLink(this.currentChem.getName()),{ ext: "sdf" } ).then( function( comp ){
      comp.addRepresentation( "ball+stick", { multipleBond: true } );
      self.stage.autoView();
    } );
    this.stage.setSpin(false);
  }

  search(event){
    console.log("term is:"+this.searchQuery)
    this.currentChem.setName(this.searchQuery)
    this.refreshView()
    this.checkIfFavorite()
  }

  //SDF
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Drag With Two Fingers to Rotate the Model',
      duration: 2000,
      position: "middle",
      cssClass: "toast"
    });
    toast.present();
  }

}

