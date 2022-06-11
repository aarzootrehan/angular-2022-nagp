import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'abc-input-output-ex',
  templateUrl: './input-output-ex.component.html',
  styleUrls: ['./input-output-ex.component.scss']
})
export class InputOutputExComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() item: string;
  @Output() deleteRequest = new EventEmitter<string>();


  constructor() { 
    console.log("Inside Constructor ", this.item);

  }

  ngOnInit(): void {
    console.log("Inside NgOnInit ", this.item);
  }

  ngAfterViewInit(): void {
    console.log("Inside NgAfterViewInit ", this.item);

  }

  ngAfterContentInit(): void {
    console.log("Inside NgAferContentInit ", this.item);

  }

  lineThrough = '';

  delete() {
    console.warn('Child says: emiting item deleteRequest with', this.item);
    this.deleteRequest.emit(this.item);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

}
