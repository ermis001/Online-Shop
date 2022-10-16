import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryButtonToInput:boolean = true;
  editButtonToInput:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  buttonTriger (triger: boolean){
    return !triger;
  }

}
