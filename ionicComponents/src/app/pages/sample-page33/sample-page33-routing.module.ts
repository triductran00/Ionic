import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage33Page } from './sample-page33.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage33PageRoutingModule {}
