import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise21Page } from './exercise21.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise21PageRoutingModule {}
