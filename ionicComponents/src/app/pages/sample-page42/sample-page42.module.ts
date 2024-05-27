import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage42PageRoutingModule } from './sample-page42-routing.module';

import { SamplePage42Page } from './sample-page42.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage42PageRoutingModule
  ],
  declarations: [SamplePage42Page]
})
export class SamplePage42PageModule {}
