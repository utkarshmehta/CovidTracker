import { Component, OnInit } from '@angular/core';
import { WorldDataService } from './word-data.service';

@Component({
  selector: 'app-world-data',
  templateUrl: './world-data.component.html',
  styleUrls: ['./world-data.component.css'],
})
export class WorldDataComponent implements OnInit {
  public dataO: any;

  constructor(private worldData: WorldDataService) {}

  ngOnInit(): void {
    this.worldData.fetchWorldData().subscribe((data) => {
      console.log(data);
    });
  }
}
