import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryButtonToInput:boolean = true;
  editButtonToInput:boolean = true;

  categoryFormGroup!:FormGroup;

  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {

    this.categoryFormGroup= new FormGroup(
      {
        name: new FormControl([null, Validators.required])
      }
    ) 
  }

  buttonTriger (triger: boolean){
    return !triger;
  }

}
