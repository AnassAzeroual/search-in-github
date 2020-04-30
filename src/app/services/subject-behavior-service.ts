import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class SBService {
  private statusSource = new BehaviorSubject<string>('git_urls');
  updateStatus = this.statusSource.asObservable();
 
  constructor() { }

  changeStatusValue(message:string) 
  { 
    this.statusSource.next(message)
  }
}