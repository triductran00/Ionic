import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage8PageRoutingModule } from './sample-page8-routing.module';

import { SamplePage8Page } from './sample-page8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage8PageRoutingModule
  ],
  declarations: [SamplePage8Page]
})
export class SamplePage8PageModule {}
