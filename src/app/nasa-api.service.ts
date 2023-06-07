import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private apiKey: string = '';

  constructor(private http: HttpClient) { }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  getApod() {
    return this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`);
  }

  getAsteroids() {
    return this.http.get(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${this.apiKey}`);
  }

  getEarthImagery() {
    return this.http.get(`https://api.nasa.gov/planetary/earth/assets?api_key=${this.apiKey}`);
  }

  getMarsRoverPhotos() {
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${this.apiKey}`);
  }

  getEpicImages() {
    return this.http.get('https://api.nasa.gov/EPIC/api/natural/images?api_key=${this.apiKey}');
  }
}
