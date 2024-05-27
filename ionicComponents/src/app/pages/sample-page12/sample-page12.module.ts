import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage12PageRoutingModule } from './sample-page12-routing.module';

import { SamplePage12Page } from './sample-page12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage12PageRoutingModule
  ],
  declarations: [SamplePage12Page]
})
export class SamplePage12PageModule {}
