import { Component, OnInit } from '@angular/core';
import {Dictonary} from "../module/Dictonary";
import {ServiceService} from "../../practice/service/service.service";
import {DictonaryServiceService} from "../dictonary-service.service";

@Component({
  selector: 'app-dictonary-page',
  templateUrl: './dictonary-page.component.html',
  styleUrls: ['./dictonary-page.component.css']
})
export class DictonaryPageComponent implements OnInit {

  dictonary : Dictonary[];

  constructor(private dictonaryService: DictonaryServiceService) {}

  dictonaryList : Dictonary[];

  ngOnInit(): void {
    this.dictonaryList == this.dictonaryService.dictonaryList;
  }

  search(wordSearch: HTMLInputElement) {
    if (wordSearch.value === '') {
      this.dictonaryList = this.dictonaryService.dictonaryList;
    } else {
      this.dictonaryList = this.dictonaryService.search(wordSearch.value);
    }
  }

}
