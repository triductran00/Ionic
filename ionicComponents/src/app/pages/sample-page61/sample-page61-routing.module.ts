import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage61Page } from './sample-page61.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage61Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage61PageRoutingModule {}
