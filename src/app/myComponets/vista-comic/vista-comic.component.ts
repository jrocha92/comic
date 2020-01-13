import { ComicInfo } from './../../models/comic_info';
import { ComicInfoService } from '../../services/comic-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-comic',
  templateUrl: './vista-comic.component.html',
  styleUrls: ['./vista-comic.component.css']
})
export class VistaComicComponent implements OnInit {

  public comicImg: string
  public comicTitle: string
  public comicYear: number

  public alertaComic: string
  public flat: boolean = true
  public flat2: Array<boolean> = [true, true, true, true, true]
  public estrellaUrl: Array<boolean> = [true, true, true, true, true]
  public numbers: Array<number> = [1,2,3,4,5]
  public estrellaSinColorear: string = '../../../assets/img/estrellaSinColorear.png'
  public estrellaColoreada: string = '../../../assets/img/estrellaColoreada.gif'

  constructor(private _comicinfoservice: ComicInfoService){


  }


  mouseoverEstrella(imput){
    switch(imput){
      case 1:
      this.estrellaUrl[0] = !this.estrellaUrl[0]
      this.estrellaUrl[1] = this.estrellaUrl[1]
      this.estrellaUrl[2] = this.estrellaUrl[2]
      this.estrellaUrl[3] = this.estrellaUrl[3]
      this.estrellaUrl[4] = this.estrellaUrl[4]
      break;
      case 2:
        this.estrellaUrl[0] = !this.estrellaUrl[0]
        this.estrellaUrl[1] = !this.estrellaUrl[1]
        this.estrellaUrl[2] = this.estrellaUrl[2]
        this.estrellaUrl[3] = this.estrellaUrl[3]
        this.estrellaUrl[4] = this.estrellaUrl[4]
      break;
      case 3:
        this.estrellaUrl[0] = !this.estrellaUrl[0]
        this.estrellaUrl[1] = !this.estrellaUrl[1]
        this.estrellaUrl[2] = !this.estrellaUrl[2]
        this.estrellaUrl[3] = this.estrellaUrl[3]
        this.estrellaUrl[4] = this.estrellaUrl[4]
      break;
      case 4:
        this.estrellaUrl[0] = !this.estrellaUrl[0]
        this.estrellaUrl[1] = !this.estrellaUrl[1]
        this.estrellaUrl[2] = !this.estrellaUrl[2]
        this.estrellaUrl[3] = !this.estrellaUrl[3]
        this.estrellaUrl[4] = this.estrellaUrl[4]
      break;
      case 5:
        this.estrellaUrl[0] = !this.estrellaUrl[0]
        this.estrellaUrl[1] = !this.estrellaUrl[1]
        this.estrellaUrl[2] = !this.estrellaUrl[2]
        this.estrellaUrl[3] = !this.estrellaUrl[3]
        this.estrellaUrl[4] = !this.estrellaUrl[4]
      break;
      default:
        break
  }  
  }

  mouseoutEstrella(imput){
    switch(imput){
      case 1:
      this.estrellaUrl[0] = !this.estrellaUrl[0]
      this.estrellaUrl[1] = this.estrellaUrl[1]
      this.estrellaUrl[2] = this.estrellaUrl[2]
      this.estrellaUrl[3] = this.estrellaUrl[3]
      this.estrellaUrl[4] = this.estrellaUrl[4]
      break;
      case 2:
        this.estrellaUrl[0] = !this.estrellaUrl[0]
        this.estrellaUrl[1] = !this.estrellaUrl[1]
        this.estrellaUrl[2] = this.estrellaUrl[2]
        this.estrellaUrl[3] = this.estrellaUrl[3]
        this.estrellaUrl[4] = this.estrellaUrl[4]
      break;
      case 3:
        this.estrellaUrl[0] = !this.estrellaUrl[0]
        this.estrellaUrl[1] = !this.estrellaUrl[1]
        this.estrellaUrl[2] = !this.estrellaUrl[2]
        this.estrellaUrl[3] = this.estrellaUrl[3]
        this.estrellaUrl[4] = this.estrellaUrl[4]
      break;
      case 4:
        this.estrellaUrl[0] = !this.estrellaUrl[0]
        this.estrellaUrl[1] = !this.estrellaUrl[1]
        this.estrellaUrl[2] = !this.estrellaUrl[2]
        this.estrellaUrl[3] = !this.estrellaUrl[3]
        this.estrellaUrl[4] = this.estrellaUrl[4]
      break;
      case 5:
        this.estrellaUrl[0] = !this.estrellaUrl[0]
        this.estrellaUrl[1] = !this.estrellaUrl[1]
        this.estrellaUrl[2] = !this.estrellaUrl[2]
        this.estrellaUrl[3] = !this.estrellaUrl[3]
        this.estrellaUrl[4] = !this.estrellaUrl[4]
      break;
      default:
        break
  }  
  }

  cambioEstrella(imput){
    
    switch(imput){
      case 1:
        this.flat = !this.flat
        this.fuente(1)
      break;
      case 2:
        this.flat = !this.flat
        this.fuente(2)
        break;
      case 3:
        this.flat = !this.flat
        this.fuente(3)
      break;
      case 4:
        this.flat = !this.flat
        this.fuente(4)
      break;
      case 5:
        this.flat = !this.flat 
        this.fuente(5)
      break;
      default:
        break
  }
  }

  fuente(imput){
    switch(imput){
      case 1:
        if(this.flat2[0] === true){
        this.flat2[0] = this.flat2[0]
        this.flat2[1] = !this.flat2[1]
        this.flat2[2] = !this.flat2[2]
        this.flat2[3] = !this.flat2[3]
        this.flat2[4] = !this.flat2[4]
        console.log(this.flat2)
        }else{
          this.flat2 = [true, true, true, true, true]
        }
      break;
      case 2:
        if(this.flat2[1]=== true){
          this.flat2[0] = !this.flat2[0]
          this.flat2[1] = this.flat2[1]
          this.flat2[2] = !this.flat2[2]
          this.flat2[3] = !this.flat2[3]
          this.flat2[4] = !this.flat2[4]
          }else{
            this.flat2 = [true, true, true, true, true]
          }
        break;
      case 3:
        if(this.flat2[2]=== true){
          this.flat2[0] = !this.flat2[0]
          this.flat2[1] = !this.flat2[1]
          this.flat2[2] = this.flat2[2]
          this.flat2[3] = !this.flat2[3]
          this.flat2[4] = !this.flat2[4]
          }else{
            this.flat2 = [true, true, true, true, true]
          }
      break;
      case 4:
        if(this.flat2[3]=== true){
          this.flat2[0] = !this.flat2[0]
          this.flat2[1] = !this.flat2[1]
          this.flat2[2] = !this.flat2[2]
          this.flat2[3] = this.flat2[3]
          this.flat2[4] = !this.flat2[4]
          }else{
            this.flat2 = [true, true, true, true, true]
          }
      break;
      case 5:
        if(this.flat2[4]=== true){
          this.flat2[0] = !this.flat2[0]
          this.flat2[1] = !this.flat2[1]
          this.flat2[2] = !this.flat2[2]
          this.flat2[3] = !this.flat2[3]
          this.flat2[4] = this.flat2[4]
          }else{
            this.flat2 = [true, true, true, true, true]
          }
      break;
      default:
        break
  }
  }

  alerta(imput){
    switch(imput){
      case 1:
        alert('Por favor hacer click en la estrella que seleccionaste si desea hacer una nueva calificación')
        break
        case 2:
          alert('Por favor hacer click en la estrella que seleccionaste si desea hacer una nueva calificación')
        break
        case 3:
          alert('Por favor hacer click en la estrella que seleccionaste si desea hacer una nueva calificación')
        break
        case 4:
          alert('Por favor hacer click en la estrella que seleccionaste si desea hacer una nueva calificación')
        break
        case 5:
          alert('Por favor hacer click en la estrella que seleccionaste si desea hacer una nueva calificación')
        break
        default:
          break
    }
  }

  public verComics(){
    this._comicinfoservice.obtenerComics().subscribe(
      (response:any)=>{
        if(response){
          this.comicImg = response.img;
          this.comicTitle = response.title
          this.comicYear = response.year
        }else{
          this.alertaComic = "No se pudo cargar el Comic, contacte al administrador de la aplicacion";
        }
      },error=>{
        if (error != null) {
          console.log(error)
        }
      }
    )
  }

  ngOnInit() {
    this.verComics()
  }

}
