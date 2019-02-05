import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { AllusersComponent } from './tabular/allusers/allusers.component';
import { HomeComponent } from './home/home.component';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { INITIAL_STATE, rootReducer, AppState } from './store';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { QuestionbankComponent } from './questionbank/questionbank.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AllusersComponent,
    HomeComponent,
    QuestionbankComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>, auth: AuthenticationService) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      null
    );
    if (auth.isLoggedIn()) {
      auth.getUser();
    }
  }
}
