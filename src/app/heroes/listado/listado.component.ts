import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
 heroes:string[] = ['spiderman', 'Iroman','hulk' , 'thot'];
 heroeBorrado:string = '';
 borrarHeroes(heroe:string):void{
   let index:number = this.heroes.indexOf(heroe);
   console.log(index);
   this.heroeBorrado =  heroe;
 }

}
