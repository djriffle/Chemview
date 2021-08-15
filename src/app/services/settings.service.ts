//--
// Stores all the settings to be used across the app
//---
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Settings } from '../models/settings';
@Injectable({
  providedIn: 'root'
})

export class SettingsService {
  _storage
  settings:Settings
  constructor(
    private storage: Storage
  ) 
  {
    this.init()
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  ngOnInit(){
  //open up storage and request and set all settings
  //Todo make sure that this will be initalized prior to when a page pulls from it
  }



  getTwodIsImplicit(){
    return this.settings.twodIsImplicit
  }
  
  getTwodIsCanonical(){
    return this.settings.twodIsConical
  }

  async loadData(){
    this.settings = await this._storage.get('favorites')
    if(this.settings == null){
      await this._storage.set('favorites',[])
      //Todo implement default seetings this.settings = 
    }
  }
}


