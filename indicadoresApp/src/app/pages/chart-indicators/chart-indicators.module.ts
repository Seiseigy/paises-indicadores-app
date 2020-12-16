import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartIndicatorsPageRoutingModule } from './chart-indicators-routing.module';

import { ChartIndicatorsPage } from './chart-indicators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartIndicatorsPageRoutingModule
  ],
  declarations: [ChartIndicatorsPage]
})
export class ChartIndicatorsPageModule {}
