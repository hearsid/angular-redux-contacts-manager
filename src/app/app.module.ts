import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './pages/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';
import { NewContactsComponent } from './pages/new-contact/new-contact.component';
import {AppRoutingModule} from "./app.routing.module";
import {ContactService} from "./pages/contact/contact.service";
import {NewContactModule} from "./pages/new-contact/new-contact.module";
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { store } from './shared/build-redux-store.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    ContactsListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular-aot-contact-manager'}),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NewContactModule
  ],
  providers: [
    ContactService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>) {
		ngRedux.provideStore(store);
	}
 }
