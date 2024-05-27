import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage14Page } from './sample-page14.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage14PageRoutingModule {}
