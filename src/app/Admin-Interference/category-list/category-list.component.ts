import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categoryFormGroup!: FormGroup;
  idOfCategory: any;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.reactiveFormCategory();
    this.idOfCategory = +this.route.snapshot.params['id'];
    this.getCategoryById();
  }

  reactiveFormCategory() {
    this.categoryFormGroup = new FormGroup({
      id: new FormControl({ value: null, disabled: true }, Validators.required),
      name: new FormControl('', Validators.required),
    });
  }

  addCategory() {
    this.categoryFormGroup.markAllAsTouched();
    let formData = this.categoryFormGroup.value;
    this.categoryService.addCategory(formData).subscribe(() => {});
  }

  getCategoryById() {
    this.categoryService
      .getCategoryById(this.idOfCategory)
      .subscribe((result) => {
        this.categoryFormGroup.setValue(result);
      });
  }

  updateCategory() {
    let formData = this.categoryFormGroup.value;
    this.categoryService
      .updateCategory(this.idOfCategory, formData)
      .subscribe(() => {});
  }
}
