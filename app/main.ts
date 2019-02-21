import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import Basemap = require("esri/Basemap");
import Point = require("esri/geometry/Point");
import { DrawGraphics } from "./drawGraphics"

declare var $: any;

export class MyClass  {
  private _view : MapView ; 
  
  public loadMap() {
    const map = new EsriMap({
      basemap: "topo" as any as Basemap //Topographic basemap
    });
       
    //Create the ESRI Map View centered at start of GDT see (https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html)
    const view = new MapView({
      map: map,
      container: "viewDiv",
      center: new Point({
        x: -113.9,
        y: 49.00
      }),
      zoom: 6
    });

    //save off view for use elsewhere in event handlers
    this._view = view;

    //Example of working with map events
    view.on("click", function(event) {
      alert(`You clicked at ${event.mapPoint.latitude}, ${event.mapPoint.longitude}` );
     });

     //Example of using JQuery - Note the $ declaration on line 7
     $("#btnClickMe").on("click", (ev: MouseEvent) => {
        DrawGraphics.drawPoint(this._view ,this._view.center)
    })

  }
}


