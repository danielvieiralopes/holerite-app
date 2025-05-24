import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors, HttpInterceptorFn } from '@angular/common/http';
import { AuthInterceptor } from './app/core/interceptors/auth.interceptor';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

const authInterceptorFn: HttpInterceptorFn = (req, next) => {
  const authInterceptor = new AuthInterceptor();
  return authInterceptor.intercept(req, {
    handle: (request) => next(request)
  });
};

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptorFn])),
    provideRouter(routes)
  ]
});
