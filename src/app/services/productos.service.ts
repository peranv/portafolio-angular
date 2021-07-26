import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando=true;
  productos: Producto[] = [];
  constructor( private http: HttpClient ) { 
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-1baec-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp:any) => {
   this.productos=resp;
      console.log(resp);
      
     /*  setTimeout(()=>{ */
        this.cargando = false;
      /* },2000) */

    } );

  }
}
