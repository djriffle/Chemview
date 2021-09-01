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

  constructor(private settingsService: SettingsService, public modalController: ModalController) { }

  ioViewWillEnter(){
    this.settings = this.settingsService.getSettings()
  }
  ngOnInit() {
  }

  
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
