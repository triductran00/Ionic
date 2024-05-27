import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage12Page } from './sample-page12.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage12PageRoutingModule {}
