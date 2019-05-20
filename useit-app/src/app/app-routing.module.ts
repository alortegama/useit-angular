import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './event/events/events.component';
import {PlaceholderComponent} from './placeholder/placeholder.component';
import {ContactComponent} from './contact/contact.component';
import {EventDetailComponent} from './event/event-detail/event-detail.component';
import {LoggedInGuard} from './login/loggedin.guard';
import {AdministratorGuard} from './login/administrator.guard';

const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'events/:id', component: EventDetailComponent, canActivate: [LoggedInGuard] },
  {path: 'events/:id', component: EventDetailComponent, canActivate: [AdministratorGuard] },
  {path: 'contact', component: ContactComponent},
  {path: 'placeholder', component: PlaceholderComponent},
  {path: '', redirectTo: 'events', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
