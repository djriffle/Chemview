import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwodSettingsPageRoutingModule } from './twod-settings-routing.module';

import { TwodSettingsPage } from './twod-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwodSettingsPageRoutingModule
  ],
  declarations: [TwodSettingsPage]
})
export class TwodSettingsPageModule {}
