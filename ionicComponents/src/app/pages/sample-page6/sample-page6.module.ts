import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage6PageRoutingModule } from './sample-page6-routing.module';

import { SamplePage6Page } from './sample-page6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage6PageRoutingModule
  ],
  declarations: [SamplePage6Page]
})
export class SamplePage6PageModule {}
