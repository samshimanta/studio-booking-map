import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


declare const google:any

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  map!:google.maps.Map
  
  title = 'studio-booking-map';
  
  ngOnInit(): void {

    this.initMap()
    this.testMarker()
    
  }

  async initMap() {
      const mapOptions: google.maps.MapOptions = {
        center: { lat: 23.8 , lng: 90.4 }, // Default center coordinates
        zoom: 13,
      };

      this.map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        mapOptions
      );
    }

    addMarker(location:any) {
        let marker = new google.maps.Marker({
            position: location,
            map: this.map
        });
    }

    testMarker() {
         let  CentralPark = new google.maps.LatLng(23.8007, 90.4262);
           this.addMarker(CentralPark);
    }




  
}
