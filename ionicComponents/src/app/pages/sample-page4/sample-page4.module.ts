import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage4PageRoutingModule } from './sample-page4-routing.module';

import { SamplePage4Page } from './sample-page4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage4PageRoutingModule
  ],
  declarations: [SamplePage4Page]
})
export class SamplePage4PageModule {}
