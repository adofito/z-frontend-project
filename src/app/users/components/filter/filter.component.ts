import { Component, Directive, ElementRef, OnInit, Input, Output, HostBinding, EventEmitter } from '@angular/core';
@Component({
  selector: 'zola-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input()
  selectedCategory;

  @Input()
  categories;

  @Output()
    cat;

  filterUsers(cat: string) {
    this.cat = cat;
  }
}
