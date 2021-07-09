import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

/*
the favorites is an array of strings being chemical names 
TODO the strings can also be chemical formulas
*/
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  //our storage object
  private _storage

  favorites

  constructor(private storage:Storage) { }

  async ngOnInit(){
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadData()
  }

  async loadData(){
    this.favorites = await this._storage.get('favorites')
    if(this.favorites == null){
      await this._storage.set('favorites',[])
      this.favorites = []
    }
  }

  favoritesContains(favorite){
    return (this.favorites.some(elm => {return JSON.stringify(elm) === JSON.stringify(favorite)}))
  }
  addFavorite(favorite){

    if(!this.favorites.includes(favorite)){
      this.favorites.push(favorite)
      this._storage.set('favorites',this.favorites)
    }
    console.log(this.favorites)
  }

  removeFavorite(favorite){
    console.log(this.favoritesContains(favorite))
    if(this.favoritesContains(favorite)){
      console.log(favorite.title)
      this.favorites = this.favorites.filter(function(el) { return el.id != favorite.id;});
      }
    this._storage.set('favorites',this.favorites)
  }

  getFavorites(){
    return this.favorites
  }


}
