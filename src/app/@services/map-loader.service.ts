import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare global {
  interface Window { google: any; }
}

@Injectable({
  providedIn: 'root'
})
export class MapLoaderService {

    private api_key = environment.map_api_key;

  constructor() { }

  load(): Promise<void>{
    return new Promise( (resolve , reject)=>{
      if (window.google && window.google.maps) return resolve();
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.api_key}&libraries=geometry&v=weekly`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Google Maps failed to load'));
      document.head.appendChild(script);
    } )
  }
}
