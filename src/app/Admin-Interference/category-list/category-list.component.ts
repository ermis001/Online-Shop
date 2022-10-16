import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

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

    this.categoryFormGroup= this.builder.group(
      {
        name: [null, Validators.required]
      }
    ) 
  }

  buttonTriger (triger: boolean){
    return !triger;
  }

}
