import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage42Page } from './sample-page42.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage42PageRoutingModule {}
