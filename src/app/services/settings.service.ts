//--
// Stores all the settings to be used across the app
//---
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Settings,DefaultSettings} from '../models/settings';
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
  /** Initializes Settings Storage and return settings */
  async init(){
    const storage = await this.storage.create();
    this._storage = await storage;
    await this.loadData()
    console.log(this.settings)
    return this.settings
  }

  getSettings():Settings{
    return this.settings
  }

  saveSettings(settings:Settings){
    this.settings=settings
    this._storage.set('settings',settings)
  }

  async loadData(){
    console.log("loaded data")
    this.settings = await this._storage.get('settings')
    if(this.settings == null || this.settings == undefined){
      await this._storage.set('settings',new DefaultSettings)
      this.settings = await this._storage.get('settings')
    }
  }
}


