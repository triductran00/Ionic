import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage57PageRoutingModule } from './sample-page57-routing.module';

import { SamplePage57Page } from './sample-page57.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage57PageRoutingModule
  ],
  declarations: [SamplePage57Page]
})
export class SamplePage57PageModule {}
