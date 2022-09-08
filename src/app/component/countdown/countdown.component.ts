import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
//trasformazione in modulo cosi che il lazy load funziona
export class Countdown implements OnInit {
  _end: Date = new Date();

  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;

  days: any;
  hours: any;
  minutes: any;
  seconds: any;

  ngOnInit() {}

  date = setInterval(()=>{
    const current = new Date().getTime();
    const remaning = this._end.getTime() - current;
    this.days = Math.floor(remaning / (this._day))
    this.hours = Math.floor((remaning % (this._day)) / (this._hour))
    this.minutes = Math.floor((remaning % (this._hour)) / (this._minute))
    this.seconds = Math.floor((remaning % (this._minute)) / this._second)
  })

  @Input()
  countdownHead: any;

  @Input()
  get end(): any { 
    return this._end.toLocaleString(); 
  }
  set end(end: any) {
    this._end = new Date(end);
  }
}