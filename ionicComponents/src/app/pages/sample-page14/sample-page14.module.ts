import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage14PageRoutingModule } from './sample-page14-routing.module';

import { SamplePage14Page } from './sample-page14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage14PageRoutingModule
  ],
  declarations: [SamplePage14Page]
})
export class SamplePage14PageModule {}
