import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage2PageRoutingModule } from './sample-page2-routing.module';

import { SamplePage2Page } from './sample-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage2PageRoutingModule
  ],
  declarations: [SamplePage2Page]
})
export class SamplePage2PageModule {}
