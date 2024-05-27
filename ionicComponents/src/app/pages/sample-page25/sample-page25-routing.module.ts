import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage25Page } from './sample-page25.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage25PageRoutingModule {}
