import { Injectable } from '@angular/core';

declare let saveToCameraRoll: any;
var domtoimage = require('dom-to-image');
// var domtoimage = require('dom-to-image');

@Injectable({
  providedIn: 'root'
})
export class ImageSaverService {

  constructor() { }
  /**
   * Takes a DOM element as input and saves it to camera roll as png
   */
  async saveImage(domElement){
    let pngURL = await this._domElementToPNG(domElement)
    await saveToCameraRoll.saveImage(pngURL, 'ChemView', function (cameraRollAssetId) {}, function (err) {});
  }
  
  _domElementToPNG(domElement){
    domtoimage.toPng(domElement).then(dataUrl=>{
      return dataUrl
    })
  }  
}

