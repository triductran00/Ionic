import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage33PageRoutingModule } from './sample-page33-routing.module';

import { SamplePage33Page } from './sample-page33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage33PageRoutingModule
  ],
  declarations: [SamplePage33Page]
})
export class SamplePage33PageModule {}
