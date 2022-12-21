import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IRatingUnit} from "../module/IRatingUnit";

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit , OnChanges {

  @Input()
  max = 10;
  @Input()
  showRatingValue: true;
  @Input()
  ratingValue = 5;

  @Output()
  rateChange = new EventEmitter<number>();

  ratingUnits: Array<IRatingUnit> = [];

  constructor() { }

  ngOnInit(): void {
    this.calculate(this.max, this.ratingValue);
  }

  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }

  select(index: number) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active= idx < this.ratingValue);
    this.rateChange.emit(this.ratingValue);
  }

  enter(index: number) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('max' in changes) {
      let max = changes.max.currentValue;
      max = typeof max === 'undefined' ? 2 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }

  calculate(max, ratingValue) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }
}
