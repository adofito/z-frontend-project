import {Component, OnInit, ViewChild} from '@angular/core';

import {UserService} from './user.service';
import {User} from '../model/user';
import {FilterComponent} from './components/filter/filter.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(FilterComponent) child;

  users: User[];
  processedUsers: User[];
  categories: Array<string>;
  selectedCategory = '';
  orderCriteria = '';

  sortCriteria = [
    {
      label: 'Featured',
      key: ''
    },
    {
      label: 'Alphabetical',
      key: 'name'
    },
    {
      label: 'Priority',
      key: 'priority'
    }];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  filterUsers() {
    this.selectedCategory = this.child.cat;
  }

  sortUsers(sort: string) {
    this.orderCriteria = sort;
    if (!sort) {
      this.processedUsers = [...this.users];
    }
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe((users: any) => {
        this.users = users.data;
        this.processedUsers = [...users.data];
        this.buildCategories();
      });
  }

  buildCategories(): void {
    const categories: Array<string> = [];
    this.users.map(function (user) {
      if (categories.indexOf(user.category) === -1) {
        categories.push(user.category);
      }
    });
    categories.unshift('');
    this.categories = categories.sort();
  }
}
