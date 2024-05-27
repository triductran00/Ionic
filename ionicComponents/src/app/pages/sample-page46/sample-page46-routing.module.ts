import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage46Page } from './sample-page46.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage46Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage46PageRoutingModule {}
