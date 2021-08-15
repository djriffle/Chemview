import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SettingsService } from 'src/app/services/settings.service';
@Component({
  selector: 'app-twod-settings',
  templateUrl: './twod-settings.page.html',
  styleUrls: ['./twod-settings.page.scss'],
})
export class TwodSettingsPage implements OnInit {

  constructor(public modalController: ModalController) { }

  
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
