import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage18PageRoutingModule } from './sample-page18-routing.module';

import { SamplePage18Page } from './sample-page18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage18PageRoutingModule
  ],
  declarations: [SamplePage18Page]
})
export class SamplePage18PageModule {}
