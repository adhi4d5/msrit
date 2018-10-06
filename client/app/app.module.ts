import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy , HashLocationStrategy  } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
/** Modules */
import { MaterialModule } from './material/material.module';
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
/** Components */
import { AppComponent } from './app.component';
import { HexagonalComponent } from './pages/hexagonal/hexagonal.component';
import {
  HomeComponent,SignupComponent,LoginComponent,
  LogoutComponent,AccountComponent,AdminComponent,
  NotFoundComponent,BooksformComponent,BookstableComponent
} from './pages';

/** Services */
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { TokenInterceptor } from './token.interceptor';





const PAGES = [
  HomeComponent,SignupComponent,LoginComponent,
  LogoutComponent,AccountComponent,AdminComponent,
  NotFoundComponent,HexagonalComponent,
  BooksformComponent,BookstableComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...PAGES,
    
  ],
  imports: [
    RoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardLogin,
    AuthGuardAdmin,UserService,
    BooksService,
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi: true},
     AuthService,
    { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
export class OtherModule { }
