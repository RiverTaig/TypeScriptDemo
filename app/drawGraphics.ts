import Graphic = require("esri/Graphic");
import MapView = require("esri/views/MapView");
import SimpleMarkerSymbol = require("esri/symbols/SimpleMarkerSymbol");
import Point = require("esri/geometry/Point");

export class DrawGraphics  {
  public static drawPoint(view : MapView, pointToDraw : Point){
    // Create a symbol for drawing the point
    var markerSymbol = new SimpleMarkerSymbol({
      color: [226, 119, 40],
      outline: {
        color: [255, 255, 255],
        width: 1
      }
    });

    // Create a graphic and add the geometry and symbol to it
    var pointGraphic = new Graphic({
      geometry: pointToDraw,
      symbol: markerSymbol
    });

    // Add the graphic to the view
    view.graphics.add(pointGraphic);
  }
}

