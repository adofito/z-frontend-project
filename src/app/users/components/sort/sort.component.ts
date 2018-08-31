import { Component, Directive, ElementRef, OnInit, Input, Output, HostBinding, EventEmitter } from '@angular/core';
@Component({
  selector: 'zola-sorter',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  @Input()
  sortCriteria;

  value = '';

  ngOnInit() {
  }
}
