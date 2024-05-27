import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage17Page } from './sample-page17.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage17PageRoutingModule {}
