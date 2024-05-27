import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage56PageRoutingModule } from './sample-page56-routing.module';

import { SamplePage56Page } from './sample-page56.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage56PageRoutingModule
  ],
  declarations: [SamplePage56Page]
})
export class SamplePage56PageModule {}
