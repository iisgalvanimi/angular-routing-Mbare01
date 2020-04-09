import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { 
    const headers = new HttpHeaders({Authorization: environment.oauthToken});
  }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAVyC-JBWWXO8QgCUE4nUguEeqUfOxcv2edoxFycx5MGdIVWorVA9nu8ef2RNF0byohCbsuFwLTbI8GmpOMExJyEhF5U8zaFBQox_0ZDgbNBerTvN_X9GoVOzxD68_P7JDiXzXYhPKFWqaqUkFG0oDG'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer TUO_AUTH'
    });
    
    return this.http.get(url, { headers });
  }

  
}
