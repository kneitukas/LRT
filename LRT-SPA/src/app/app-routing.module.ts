import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { DataResolver } from './resolvers/data.resolver'

const routes: Routes = [
  {path: '', component: ChannelListComponent, resolve: {channels: DataResolver} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
