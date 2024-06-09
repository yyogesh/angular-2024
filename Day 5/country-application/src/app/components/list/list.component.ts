import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnChanges {
  @Input('borders') borders: string[] = [];
  @Input('search') search: string = '';
  @Output() onDetail = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
    if(changes['search'].currentValue) {
      this.borders = this.borders.filter(border => border.toLowerCase().includes(changes['search'].currentValue.toLowerCase()));
    } 
  }

  onDetailClick(): void {
    this.onDetail.emit(this.borders);
  }
}
