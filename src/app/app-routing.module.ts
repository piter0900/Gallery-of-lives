import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { ShareLifeComponent }      from './share-life/share-life.component';
import { VidRecordingComponent }   from './vid-recording/vid-recording.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: DashboardComponent },
  { path: 'see-lives', component: HeroesComponent },
  { path: 'share-life', component: ShareLifeComponent},
  { path: 'vid-recording', component: VidRecordingComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
