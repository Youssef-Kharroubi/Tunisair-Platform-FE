import { CanActivateFn } from '@angular/router';

export const exampleGuaGuard: CanActivateFn = (route, state) => {
  return true;
};
