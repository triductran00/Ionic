import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage5PageRoutingModule } from './sample-page5-routing.module';

import { SamplePage5Page } from './sample-page5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage5PageRoutingModule
  ],
  declarations: [SamplePage5Page]
})
export class SamplePage5PageModule {}
