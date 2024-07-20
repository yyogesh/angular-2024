import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './request-interceptor';
import { ApiService } from './api.service';
import { firstValueFrom } from 'rxjs';

export function initializeApp(apiService: ApiService) {
  return () => apiService.loadInitData().toPromise().then((data) => {
    console.log('Initial data loaded', data);
  });

 // firstValueFrom(apiService.loadInitData())
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  // providers: [provideHttpClient(), 
  //   {provide: HTTP_INTERCEPTORS, useValue: RequestInterceptor, multi: true}
  // ],
  providers: [provideHttpClient(withInterceptors(
    [authInterceptor]
  )), {
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [ApiService],
    multi: true,
    // useFactory: () => {
    //   return () => new Promise(resolve => {
    //     setTimeout(() => {
    //       resolve(null);
    //     }, 1000);
    //   });
    // },
    // deps: []  // Added this line
  }],  // Added this line
  bootstrap: [AppComponent]
})
export class AppModule { }
