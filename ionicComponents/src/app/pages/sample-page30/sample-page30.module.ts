import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage30PageRoutingModule } from './sample-page30-routing.module';

import { SamplePage30Page } from './sample-page30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage30PageRoutingModule
  ],
  declarations: [SamplePage30Page]
})
export class SamplePage30PageModule {}
