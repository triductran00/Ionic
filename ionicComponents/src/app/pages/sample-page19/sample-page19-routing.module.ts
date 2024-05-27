import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage19Page } from './sample-page19.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage19PageRoutingModule {}
