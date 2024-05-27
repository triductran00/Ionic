import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage55PageRoutingModule } from './sample-page55-routing.module';

import { SamplePage55Page } from './sample-page55.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage55PageRoutingModule
  ],
  declarations: [SamplePage55Page]
})
export class SamplePage55PageModule {}
