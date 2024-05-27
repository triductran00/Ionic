import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage67PageRoutingModule } from './sample-page67-routing.module';

import { SamplePage67Page } from './sample-page67.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage67PageRoutingModule
  ],
  declarations: [SamplePage67Page]
})
export class SamplePage67PageModule {}
