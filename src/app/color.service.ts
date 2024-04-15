import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private color = new BehaviorSubject('Red');
  private nation = new BehaviorSubject('');
  private array = new Array;
  getColor = this.color.asObservable();
  constructor() { }

  setColor(color: string){
    this.color.next(color)
    console.log(this.color.value)
    this.addToArray(this.color.value, this.nation.value)
  }
  setNation(nation:string){
    this.nation.next(nation)
  }

  private addToArray(color:string, nation:string){
    this.array.push([color, nation])
  }
  getArray(){
    return this.array
  }
}
