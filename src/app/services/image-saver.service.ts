import { Injectable } from '@angular/core';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';

var domtoimage = require('dom-to-image');
// var domtoimage = require('dom-to-image');

@Injectable({
  providedIn: 'root'
})
export class ImageSaverService {

  constructor(private photoLibrary:PhotoLibrary) { }
  /**
   * Takes a DOM element as input and saves it to camera roll as png
   */
  async saveImage(domElement){
    let pngURL:string = await this._domElementToPNG(domElement)
    await this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.saveImage(pngURL,"ChemView").then(() =>{
        console.log("image save successful")
      }).catch(err => console.log("image save failed"))
    })
    .catch(err => console.log('permissions weren\'t granted'));

  }
  
  async _domElementToPNG(domElement):Promise<string>{
    let answer:string
    await domtoimage.toPng(domElement).then(dataUrl=>{
      answer = dataUrl
    })
    return await answer
  }  
}

