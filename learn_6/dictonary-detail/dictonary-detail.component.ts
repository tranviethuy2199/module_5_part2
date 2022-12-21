import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DictonaryServiceService} from "../dictonary-service.service";
import {Dictonary} from "../module/Dictonary";

class Words {
}

@Component({
  selector: 'app-dictonary-detail',
  templateUrl: './dictonary-detail.component.html',
  styleUrls: ['./dictonary-detail.component.css']
})
export class DictonaryDetailComponent implements OnInit {
  word: Dictonary;
  eng: string;

  constructor(private _activatedRoute: ActivatedRoute,
              private _dictonaryService: DictonaryServiceService) {
  }

  ngOnInit(): void {
    this.eng = this._activatedRoute.snapshot.params.index;
    this.word = this._dictonaryService.getWords(this.eng);
  }
}
