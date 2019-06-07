import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: "root" })
export class ApiService {
   url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getChannels() {
    console.log(this.url)
    return this.http.get(this.url);
  }
}
