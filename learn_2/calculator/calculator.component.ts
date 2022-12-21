import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number_A?: number;
  number_B?: number;
  result?: number | string
  number?: number
  constructor() { }

  ngOnInit(): void {
  }

  calculator(number: String) {

  }

  calculation(phep_tinh : string) {
    switch (phep_tinh){
      case '+':
        this.result = this.number_A + this.number_B
        break;
      case '-':
        this.result = this.number_A - this.number_B
        break;
      case '*':
        this.result = this.number_A * this.number_B
        break;
      case '/':
        this.result = this.number_A / this.number_B
        break;
    }
  }

}
