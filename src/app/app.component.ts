import { Component } from '@angular/core';
import { NasaApiService } from './nasa-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiKey: string = '';

  constructor(private nasaApiService: NasaApiService) {}

  submitApiKey() {
    this.nasaApiService.setApiKey(this.apiKey);
  }
}
