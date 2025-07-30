import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapLoaderService } from './@services/map-loader.service';


declare const google: any;
// declare const { spherical }: google.maps.GeometryLibrary
// declare const spherical :  google.map;

declare const { LatLng }: google.maps.CoreLibrary

// declare const {spherical}: typeof  google.maps.geometry;

declare const {spherical}:  google.maps.GeometryLibrary;

declare global {
  interface Window { google: any; }
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

  map!: any

  title = 'studio-booking-map';


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object ,
    private mapLoaderService:MapLoaderService
    // if (isPlatformBrowser(this.platformId)) {console.log(navigator.userAgent);
    //   } else {
    //     // Handle server-side rendering scenario
    //     console.log('Running on server, navigator not available.');
    //   }

  ) { }

  ngOnInit(): void {

    // this.getCurrentLocation()
    console.log(this.platformId);


    // this.initMap()
    // this.testMarker()

  }

  async ngAfterViewInit() {

    this.mapLoaderService.load().then(
      ()=>{
          const sph = google.maps.geometry.spherical;
          console.log(sph.computeDistanceBetween({lat:23.79 , lng:90.42},{lat:24.2 , lng:91.11}));

          // sph.computeDistanceBetween({lat:23.79 , lng:90.42},{lat:24.2 , lng:91.11})
          
      }
    )




    this.getCurrentLocation()
    // const { spherical } = await google.maps.geometry

    // this.initMap()
    //   if ( typeof LatLng !== undefined ){
    //       let a = new LatLng(23.8,90.4)
    //   console.log(a);

    // }
  }


 async getCurrentLocation() {
    if (this.platformId == 'browser') {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);

      })
    }




    if (this.platformId == 'browser') {
      // let a= new LatLng(23.79 , 90.44)

      // let distance= spherical.computeDistanceBetween({lat:23.79 , lng:90.42},{lat:24.2 , lng:91.11})
      // console.log(a);

      //          if(typeof spherical !== undefined ){
      //   spherical.computeDistanceBetween( { lat: 23.8, lng: 90.4 } ,  { lat: 23.8, lng: 90.4 }  )
      // }
      // console.log(spherical);
      

      // spherical.computeDistanceBetween({ lat: 23.8, lng: 90.4 }, { lat: 23.8, lng: 90.4 })

    }

  }

  async initMap() {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 23.8, lng: 90.4 }, // Default center coordinates
      zoom: 13,
    };


    this.map = await new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      mapOptions
    );

    // if(typeof spherical !== undefined ){
    //   spherical.computeDistanceBetween( { lat: 23.8, lng: 90.4 } ,  { lat: 23.8, lng: 90.4 }  )
    // }

  }

  // addMarker(location: any) {
  //   let marker = new google.maps.Marker({
  //     position: location,
  //     map: this.map
  //   });
  // }

  // testMarker() {
  //   let CentralPark = new google.maps.LatLng(23.8007, 90.4262);
  //   this.addMarker(CentralPark);
  // }

  // getUserLocation() {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log(position);

  //       const userLat = position.coords.latitude;
  //       const userLng = position.coords.longitude;

  //       const userPosition = new google.maps.LatLng(userLat,userLng) 

  //       this.addMarker(userPosition)
  //       // Use userLat and userLng to center the map or add a marker
  //     },
  //     (error) => {
  //       console.error("Error getting user location:", error);
  //     }
  //   )
  // }



}
