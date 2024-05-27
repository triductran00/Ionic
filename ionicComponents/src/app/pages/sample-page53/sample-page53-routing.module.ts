import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage53Page } from './sample-page53.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage53Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage53PageRoutingModule {}
