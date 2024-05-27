import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage3PageRoutingModule } from './sample-page3-routing.module';

import { SamplePage3Page } from './sample-page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage3PageRoutingModule
  ],
  declarations: [SamplePage3Page]
})
export class SamplePage3PageModule {}
