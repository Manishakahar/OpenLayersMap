import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import view from 'ol/View';
import Tile from 'ol/layer/Tile';
import { OSM } from 'ol/source';

@Component({
  selector: 'app-openlayer',
  templateUrl: './openlayer.component.html',
  styleUrls: ['./openlayer.component.scss']
})

export class OpenlayerComponent implements OnInit {

  map: any;
  constructor() { }

  ngOnInit(): void {
    this.initializmap();
  }

  initializmap() {

    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
        })
      ],
      view: new view({
        center: [18.742748946039903, 73.31415759221169],
        zoom: 4
      }),
    });
  }
}
