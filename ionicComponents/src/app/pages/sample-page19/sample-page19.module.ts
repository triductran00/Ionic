import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage19PageRoutingModule } from './sample-page19-routing.module';

import { SamplePage19Page } from './sample-page19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage19PageRoutingModule
  ],
  declarations: [SamplePage19Page]
})
export class SamplePage19PageModule {}
