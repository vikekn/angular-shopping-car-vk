import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {}
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
    lat: -36.633931,
    lng: -64.298565
  };
 // markerPositions: google.maps.LatLngLiteral[] = [];
  markerTienda: google.maps.LatLngLiteral = {
    lat: -36.633931,
    lng: -64.298565
  };
  zoom = 15;

  circleCenter: google.maps.LatLngLiteral = {
    lat: -36.633931,
    lng: -64.298565
};
radius = 3;

  /*addMarker(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
  openInfoWindow(marker: MapMarker) {
      if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }*/
}
