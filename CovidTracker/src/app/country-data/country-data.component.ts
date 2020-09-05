import { Component, OnInit } from '@angular/core';
import { CountryDataService } from './country-data.service';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.css'],
})
export class CountryDataComponent implements OnInit {
  public countryMeter: Object = {};

  constructor(private countryData: CountryDataService) {}

  ngOnInit(): void {
    this.countryData.fetchWorldData().subscribe((data) => {
      this.countryMeter = data;
      console.log(this.countryMeter);
    });
  }
}
