import { Component } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';
import { CurrentChemService } from '../services/current-chem.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  favorites=[]
  empty:boolean = true

  //TODO add admob integration
  constructor(private favoriteService:FavoriteService, private currentChemService:CurrentChemService,private router:Router) {}

  ionViewWillEnter(){
    this.favorites = this.favoriteService.getFavorites()
    this.empty = this.favorites.length == 0
  }

  removeFavorite(favorite){
    console.log(favorite)
    this.favoriteService.removeFavorite(favorite)
    this.favorites = this.favoriteService.getFavorites()
  }

  load(favorite){
    this.currentChemService.setName(favorite)
    this.router.navigate(['tabs/tab1'])
  }

}
