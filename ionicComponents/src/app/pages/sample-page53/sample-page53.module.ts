import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage53PageRoutingModule } from './sample-page53-routing.module';

import { SamplePage53Page } from './sample-page53.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage53PageRoutingModule
  ],
  declarations: [SamplePage53Page]
})
export class SamplePage53PageModule {}
