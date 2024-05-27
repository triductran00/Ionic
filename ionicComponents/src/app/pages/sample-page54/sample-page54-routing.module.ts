import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage54Page } from './sample-page54.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage54Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage54PageRoutingModule {}
