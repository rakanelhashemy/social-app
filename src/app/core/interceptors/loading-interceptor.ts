import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const ngxSpinner = inject(NgxSpinnerService);
  // show spinner
  ngxSpinner.show();

  // finalize => work after (next) and (error)
  return next(req).pipe(finalize(() => {
    // hide spinner
    ngxSpinner.hide();
  }));
};