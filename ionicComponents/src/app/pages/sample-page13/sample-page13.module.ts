import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage13PageRoutingModule } from './sample-page13-routing.module';

import { SamplePage13Page } from './sample-page13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage13PageRoutingModule
  ],
  declarations: [SamplePage13Page]
})
export class SamplePage13PageModule {}
