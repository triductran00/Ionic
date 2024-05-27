import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage15PageRoutingModule } from './sample-page15-routing.module';

import { SamplePage15Page } from './sample-page15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage15PageRoutingModule
  ],
  declarations: [SamplePage15Page]
})
export class SamplePage15PageModule {}
