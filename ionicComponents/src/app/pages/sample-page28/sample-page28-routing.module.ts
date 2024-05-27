import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage28Page } from './sample-page28.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage28PageRoutingModule {}
