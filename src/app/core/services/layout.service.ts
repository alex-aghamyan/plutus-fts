import { inject, Injectable } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly breakpointObserver = inject(BreakpointObserver);
  
  observeHandset(): Observable<BreakpointState> {
    return this.breakpointObserver.observe(Breakpoints.Handset);
  }
}
