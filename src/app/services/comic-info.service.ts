import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicInfoService {

  public nComic: number = 1
  /* public url: string = `http://xkcd.com/${this.nComic}/info.0.json` */
  /* private url: string = `http://xkcd.com/info.0.json` */
  private url: string = `/info.0.json`

  constructor(private _http: HttpClient) { }

  public obtenerComics(){
    let options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    };
    return this._http.get(
      this.url, options
    )
  }
}
