import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage21PageRoutingModule } from './sample-page21-routing.module';

import { SamplePage21Page } from './sample-page21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage21PageRoutingModule
  ],
  declarations: [SamplePage21Page]
})
export class SamplePage21PageModule {}
