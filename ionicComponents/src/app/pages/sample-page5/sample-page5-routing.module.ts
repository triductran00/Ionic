import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage5Page } from './sample-page5.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage5PageRoutingModule {}
