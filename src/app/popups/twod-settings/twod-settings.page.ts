import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SettingsService } from 'src/app/services/settings.service';
import { Settings,DefaultSettings } from 'src/app/models/settings';
@Component({
  selector: 'app-twod-settings',
  templateUrl: './twod-settings.page.html',
  styleUrls: ['./twod-settings.page.scss'],
})
export class TwodSettingsPage implements OnInit {
  
  settings:Settings = new DefaultSettings
  atomBalls:boolean
  constructor(private settingsService: SettingsService, public modalController: ModalController) { }

  ionViewWillEnter(){
    this.settings = this.settingsService.getSettings()
    if(this.settings.atomVisualization == "balls"){
      this.atomBalls = true 
    }
    console.log(this.settings)
  }
  
  
  ngOnInit() {
  }

  
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    if(this.atomBalls){
      this.settings.atomVisualization = "balls"
    }
    else{
      this.settings.atomVisualization = "default"
    }
    this.settingsService.saveSettings(this.settings)
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
