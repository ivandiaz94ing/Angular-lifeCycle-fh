import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: [
  ]
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {


  constructor(){}
  @Input()
  public price : number = 0;

  public interval$?: Subscription;


  ngOnInit(): void {
    console.log('HIJO: OnInit');
    this.interval$ = interval(1000).subscribe(value => console.log(`Tick: ${value}`));
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('HIJO: OnChanges');
  }
  ngOnDestroy(): void {

    console.log('HIJO: OnDestroy');
    this.interval$?.unsubscribe();
  }



}
