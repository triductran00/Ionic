import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastFoodPagePageRoutingModule } from './fast-food-page-routing.module';

import { FastFoodPagePage } from './fast-food-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastFoodPagePageRoutingModule
  ],
  declarations: [FastFoodPagePage]
})
export class FastFoodPagePageModule {}
