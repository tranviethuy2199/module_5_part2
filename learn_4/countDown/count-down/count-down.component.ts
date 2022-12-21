import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit , OnChanges , OnDestroy {
  remainingTime: number;
  message = '';

  @Input()
  seconds = 10;

  @Output()
  finish = new EventEmitter<boolean>()
  private intervalId = 0;

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at time-${this.remainingTime} seconds`;
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('seconds' in changes) {
      let v = changes.seconds.currentValue;
      v = typeof v === 'undefined' ? 11 : v;
      const vFixed = Number(v);
      this.seconds = Number.isNaN(vFixed) ? 11 : vFixed;
    }
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Happy new year !';
        this.clearTimer();
        this.finish.emit(true);
      } else {
        this.message = `Time-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}
