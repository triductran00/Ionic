import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage38PageRoutingModule } from './sample-page38-routing.module';

import { SamplePage38Page } from './sample-page38.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage38PageRoutingModule
  ],
  declarations: [SamplePage38Page]
})
export class SamplePage38PageModule {}
