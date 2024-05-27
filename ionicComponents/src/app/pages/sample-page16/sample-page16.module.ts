import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage16PageRoutingModule } from './sample-page16-routing.module';

import { SamplePage16Page } from './sample-page16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage16PageRoutingModule
  ],
  declarations: [SamplePage16Page]
})
export class SamplePage16PageModule {}
