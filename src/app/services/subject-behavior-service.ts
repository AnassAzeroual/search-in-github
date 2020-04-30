import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class SubjectBehaviorService {
  private statusSource = new BehaviorSubject<string>('git_url');
  updateStatus = this.statusSource.asObservable();
 
  constructor() { }

  changeStatusValue(message:string) { this.statusSource.next(message) }
}