import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage48PageRoutingModule } from './sample-page48-routing.module';

import { SamplePage48Page } from './sample-page48.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage48PageRoutingModule
  ],
  declarations: [SamplePage48Page]
})
export class SamplePage48PageModule {}
