import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage58PageRoutingModule } from './sample-page58-routing.module';

import { SamplePage58Page } from './sample-page58.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage58PageRoutingModule
  ],
  declarations: [SamplePage58Page]
})
export class SamplePage58PageModule {}
