import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage54PageRoutingModule } from './sample-page54-routing.module';

import { SamplePage54Page } from './sample-page54.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage54PageRoutingModule
  ],
  declarations: [SamplePage54Page]
})
export class SamplePage54PageModule {}
