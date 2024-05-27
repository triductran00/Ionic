import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise21PageRoutingModule } from './exercise21-routing.module';

import { Exercise21Page } from './exercise21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise21PageRoutingModule
  ],
  declarations: [Exercise21Page]
})
export class Exercise21PageModule {}
