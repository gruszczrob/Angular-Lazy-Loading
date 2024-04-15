import { Component } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css'
})
export class PlanesComponent {
  color:string = "";
  constructor(private colorService: ColorService){
  }
  cars = new Array
  ngOnInit():void{
    this.cars = this.colorService.getArray();
    console.log(this.cars)
    const writeDiv = document.getElementById('write') as HTMLDivElement;
    
    if (writeDiv != null) {
      if(this.cars.length>0)
      writeDiv.innerHTML=""
      for(let i = 0; i<this.cars.length; i+=1){
        writeDiv.innerHTML += this.cars[i] + "<br>"

      }
    }else{
      console.log(writeDiv)
    }
  }


}
