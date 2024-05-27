import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage1PageRoutingModule } from './sample-page1-routing.module';

import { SamplePage1Page } from './sample-page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage1PageRoutingModule
  ],
  declarations: [SamplePage1Page]
})
export class SamplePage1PageModule {}
