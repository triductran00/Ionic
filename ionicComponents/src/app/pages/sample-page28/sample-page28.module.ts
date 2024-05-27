import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage28PageRoutingModule } from './sample-page28-routing.module';

import { SamplePage28Page } from './sample-page28.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage28PageRoutingModule
  ],
  declarations: [SamplePage28Page]
})
export class SamplePage28PageModule {}
