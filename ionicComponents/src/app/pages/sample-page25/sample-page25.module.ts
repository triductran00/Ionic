import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePage25PageRoutingModule } from './sample-page25-routing.module';

import { SamplePage25Page } from './sample-page25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePage25PageRoutingModule
  ],
  declarations: [SamplePage25Page]
})
export class SamplePage25PageModule {}
