import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage56Page } from './sample-page56.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage56Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage56PageRoutingModule {}
