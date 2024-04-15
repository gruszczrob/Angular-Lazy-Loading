import { Component } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-german',
  templateUrl: './german.component.html',
  styleUrl: './german.component.css'
})
export class GermanComponent {
  color:string = "";
  constructor(private colorService: ColorService){
    this.colorService.getColor.subscribe(color => this.color = color);
    this.colorService.setNation("Germany")
  }
  ngOnInit():void{}

  updateColor(color:string){
    this.colorService.setColor(color)
    console.log(this.colorService.getArray())
  }
}
