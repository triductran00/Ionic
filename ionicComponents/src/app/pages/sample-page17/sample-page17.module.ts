import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage17PageRoutingModule } from './sample-page17-routing.module';

import { SamplePage17Page } from './sample-page17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage17PageRoutingModule
  ],
  declarations: [SamplePage17Page]
})
export class SamplePage17PageModule {}
