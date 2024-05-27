import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage46PageRoutingModule } from './sample-page46-routing.module';

import { SamplePage46Page } from './sample-page46.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage46PageRoutingModule
  ],
  declarations: [SamplePage46Page]
})
export class SamplePage46PageModule {}
