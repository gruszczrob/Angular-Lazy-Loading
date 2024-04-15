import { Component } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-japan',
  templateUrl: './japan.component.html',
  styleUrl: './japan.component.css'
})
export class JapanComponent {
  color:string = "";
  constructor(private colorService: ColorService){
    this.colorService.getColor.subscribe(color => this.color = color);
    this.colorService.setNation("Japan")
  }
  ngOnInit():void{}

  updateColor(color:string){
    this.colorService.setColor(color)
    console.log(this.colorService.getArray())
  }
}
