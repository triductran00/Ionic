import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage3Page } from './sample-page3.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage3PageRoutingModule {}
