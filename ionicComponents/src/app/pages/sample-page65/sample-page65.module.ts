import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage65PageRoutingModule } from './sample-page65-routing.module';

import { SamplePage65Page } from './sample-page65.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage65PageRoutingModule
  ],
  declarations: [SamplePage65Page]
})
export class SamplePage65PageModule {}
