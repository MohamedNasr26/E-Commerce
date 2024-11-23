import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './shared/interceptors/loading/loading.interceptor';
import { ErrorsInterceptor } from './shared/interceptors/errors/errors.interceptor';
import { MyheadersInterceptor } from './shared/interceptors/Headers/myheaders.interceptor';
import { DataNotFoundComponent } from './shared/components/data-not-found/data-not-found.component';
import { DynamicTremStringPipe } from './shared/pipes/dynamic-trem-string.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TopBarComponent,
    DynamicTremStringPipe
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ToastModule,
    NgxSpinnerModule
    ],
  providers:[
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyheadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
