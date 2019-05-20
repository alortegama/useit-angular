import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {EventsComponent} from './event/events/events.component';
import {CarouselComponent} from './carousel/carousel.component';
import {EventService} from './event.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {HttpConfigInterceptor} from './interceptor/HttpConfigInterceptor';
import {PlaceholderComponent} from './placeholder/placeholder.component';
import {ContactComponent} from './contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OWL_DATE_TIME_LOCALE, OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {FormsModule} from '@angular/forms';
import {EventDetailComponent} from './event/event-detail/event-detail.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {CreateEventComponent} from './event/create-event/create-event.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {LoginBasicModule} from './login/login-basic.module';
import {SearchPipe} from './search.pipe';
import {AuthInterceptor} from './interceptor/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsComponent,
    CarouselComponent,
    PlaceholderComponent,
    ContactComponent,
    EventDetailComponent,
    CreateEventComponent,
    SearchPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AngularFontAwesomeModule,
    LoginBasicModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }), FormsModule, MatButtonModule, MatDialogModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true},
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'ca'},
    EventService],
  bootstrap: [AppComponent],
  entryComponents: [CreateEventComponent, EventDetailComponent]
})
export class AppModule {
}
