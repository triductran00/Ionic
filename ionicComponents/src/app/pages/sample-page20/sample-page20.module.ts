import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage20PageRoutingModule } from './sample-page20-routing.module';

import { SamplePage20Page } from './sample-page20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage20PageRoutingModule
  ],
  declarations: [SamplePage20Page]
})
export class SamplePage20PageModule {}
