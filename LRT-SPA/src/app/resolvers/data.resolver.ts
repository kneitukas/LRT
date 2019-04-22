import { Resolve, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class DataResolver implements Resolve<any> {

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}

  resolve() {
    return this.apiService.getChannels();
  }
}
