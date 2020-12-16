import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartIndicatorsPage } from './chart-indicators.page';

const routes: Routes = [
  {
    path: '',
    component: ChartIndicatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartIndicatorsPageRoutingModule {}
