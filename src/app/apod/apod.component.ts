import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  apodImages: any[] = [];

  constructor(private nasaApiService: NasaApiService) { }

  ngOnInit() {
    this.nasaApiService.getApod().subscribe((response: any) => {
      this.apodImages = response;
    });
  }
}
