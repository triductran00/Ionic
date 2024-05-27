import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage20Page } from './sample-page20.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage20PageRoutingModule {}
