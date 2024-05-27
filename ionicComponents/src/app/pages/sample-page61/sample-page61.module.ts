import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage61PageRoutingModule } from './sample-page61-routing.module';

import { SamplePage61Page } from './sample-page61.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage61PageRoutingModule
  ],
  declarations: [SamplePage61Page]
})
export class SamplePage61PageModule {}
