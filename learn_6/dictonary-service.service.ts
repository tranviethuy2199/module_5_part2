import { Injectable } from '@angular/core';
import {Dictonary} from "./module/Dictonary";



@Injectable({
  providedIn: 'root'
})
export class DictonaryServiceService {

  // @ts-ignore
  // @ts-ignore
  private _dictonaryList : Dictonary[]=[
    {word: 'hello' , mean:['xin chào']},
    {word: 'bye' , mean:['tạm biệt']},
    {word: 'apple' , mean:['táo']},
    {word: 'banana' , mean:['chuối']},
    {word: 'disabilities' , mean:['thiểu năng']},
    {word: 'thiểu năng' , mean:['hải']},
  ]

  constructor() { }


  get dictonaryList(): Dictonary[] {
    return this._dictonaryList;
  }

  set dictonaryList(value: Dictonary[]) {
    this._dictonaryList = value;
  }

  public getWords(eng: string): Dictonary {
    return this._dictonaryList.find(value => value.word === eng);
  }

  search(value: string) {
    return this._dictonaryList.filter(word => word.word.includes(value));
  }
}
