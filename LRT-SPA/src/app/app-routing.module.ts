import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { DataResolver } from './resolvers/data.resolver'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: ChannelListComponent, resolve: {channels: DataResolver} },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
