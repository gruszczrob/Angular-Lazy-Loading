import { Component } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-american',
  templateUrl: './american.component.html',
  styleUrl: './american.component.css'
})
export class AmericanComponent {
  color:string = "";
  constructor(private colorService: ColorService){
    this.colorService.getColor.subscribe(color => this.color = color);
    this.colorService.setNation("American")
  }
  ngOnInit():void{}

  updateColor(color:string){
    this.colorService.setColor(color)
    console.log(this.colorService.getArray())
  }
}
