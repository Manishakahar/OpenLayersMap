import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import {View} from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Draw from "ol/interaction/Draw";
import { transform, useGeographic } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import fill from 'ol/style/Fill';
import icon from 'ol/style/Icon';
import style from 'ol/style/Style';
import stroke from 'ol/style/Stroke';
import text from 'ol/style/Text';
import Polyline from 'ol/format/Polyline';

import line from 'ol/geom/LineString';
useGeographic();

@Component({
  selector: 'app-openlayer',
  templateUrl: './openlayer.component.html',
  styleUrls: ['./openlayer.component.scss']
})

export class OpenlayerComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
    const place = [78.9629, 20.5937];
    
    var map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: place,
        zoom: 6
      })
    });
    var points = [[73.0289,19.0307], [ 73.2685,18.8330],[ 73.4642,18.7604,],[76.2395,17.8713]];
    const routeFeature = new Feature({
      type: 'route',
      geometry: new line(points),
    });

    for (var i = 0; i < points.length; i++) {
      points[i] = transform(points[i], 'EPSG:4326', 'EPSG:4326');
    }

    var featureLine = new Feature({
      geometry: new line(points)
    });

    var vectorLine = new VectorSource({});
    vectorLine.addFeature(featureLine);
  
    var vectorLineLayer = new VectorLayer({
      source: vectorLine,
    style: new style({
        fill: new fill({ color: 'red' }),
        stroke: new stroke({ color: 'black', width: 4 })
    })
    });
    map.addLayer(vectorLineLayer);

  }
  
}


