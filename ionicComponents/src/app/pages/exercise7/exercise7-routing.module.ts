import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise7Page } from './exercise7.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise7PageRoutingModule {}
