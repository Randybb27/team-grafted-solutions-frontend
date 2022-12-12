import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'socialvibez',
    loadChildren: () => import('./socialvibez/tabs.module').then((m) => m.TabsPageModule),
  },

  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full',
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then((m) => m.LogInPageModule),
  },
  {
    path: 'socialvibez/friends-profile',
    loadChildren: () => import('./friends-profile/friends-profile.module').then((m) => m.FriendsProfilePageModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
