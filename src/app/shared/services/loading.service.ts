import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  // Booleans for display of loading indicators
  isSpinnerDisplayed: boolean = true;
  isProgressbarDisplayed: boolean = false;
  // Enable/disable loading indicators
  showSpinner(): void {
    this.isSpinnerDisplayed = true;
  }
  hideSpinner(): void {
    this.isSpinnerDisplayed = false;
  }
  showProgressbar(): void {
    this.isProgressbarDisplayed = true;
  }
  hideProgressbar(): void {
    this.isProgressbarDisplayed = false;
  }
}
