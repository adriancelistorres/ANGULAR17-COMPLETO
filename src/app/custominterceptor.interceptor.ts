import { HttpInterceptorFn } from '@angular/common/http';

export const custominterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
