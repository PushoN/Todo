import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.dataHandler.categorySubject.subscribe(cats => this.categories = cats);
  }

  showTasksByCategory(category: Category) {
    this.dataHandler.fillTasksByCategory(category);
    this.selectedCategory = category;
  }
}
