import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { MyCounterComponent } from './my-counter/my-counter.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-counter', pathMatch: 'full' },
  {
    path: 'my-counter',
    component: MyCounterComponent,
  },
  {
    path: 'message',
    component: MessagesComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
