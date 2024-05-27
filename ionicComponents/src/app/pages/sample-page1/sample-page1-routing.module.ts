import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage1Page } from './sample-page1.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage1PageRoutingModule {}
