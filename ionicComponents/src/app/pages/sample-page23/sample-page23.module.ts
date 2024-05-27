import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage23PageRoutingModule } from './sample-page23-routing.module';

import { SamplePage23Page } from './sample-page23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage23PageRoutingModule
  ],
  declarations: [SamplePage23Page]
})
export class SamplePage23PageModule {}
