import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage15Page } from './sample-page15.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage15PageRoutingModule {}
