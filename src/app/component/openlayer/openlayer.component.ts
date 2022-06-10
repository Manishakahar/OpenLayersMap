import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Draw from "ol/interaction/Draw";
import { useGeographic } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

useGeographic();

@Component({
  selector: 'app-openlayer',
  templateUrl: './openlayer.component.html',
  styleUrls: ['./openlayer.component.scss']
})

export class OpenlayerComponent implements OnInit {
  map: Map | any;
  draw: any;

  lineType: string = 'LineString';
  raster = new TileLayer({
    source: new OSM(),
  });

  source = new VectorSource({ wrapX: false });

  vector = new VectorLayer({
    source: this.source,
  });

  centroid = [78.9629, 20.5937];

  constructor() { }

  ngOnInit(): void {
    const place = [78.9629, 20.5937];

    const point = new Point(place);

    const map = new Map({
      target:   'map',
      view: new View({
        center: place,
        zoom: 4,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(Point)],
          }),
        })
      ],
    });
  }
  addInteraction() {
  const value = this.lineType;
    if (value !== 'None') {
      this.draw = new Draw({
        type: value,
        source: this.source
      });
      this.map.addInteraction(this.draw);
  
    }
  }

  onTypeChange() {
    this.map.removeInteraction(this.draw);
    this.addInteraction();
  }

}
