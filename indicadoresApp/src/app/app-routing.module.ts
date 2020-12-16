import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'indicators',
    loadChildren: () => import('./pages/indicators/indicators.module').then( m => m.IndicatorsPageModule)
  },
  {
    path: 'chart-indicators',
    loadChildren: () => import('./pages/chart-indicators/chart-indicators.module').then( m => m.ChartIndicatorsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
