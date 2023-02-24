import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss'],
})
export class SearchHeaderComponent implements OnInit {
  faSearch = faSearch;
  faList = faList;
  recipeSearchForm: FormGroup = new FormGroup({});

  @Output() openModal = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.onInitRecipeForm();
  }

  /**
   * Method to show the modal
   */
  onShowModal() {
    this.openModal.emit(true);
  }

  /**
   * Method to submit the form
   */
  onSubmit() {
    console.log("SUCCESS");
  }

  /**
   * Method to init the recipe form
   */
  private onInitRecipeForm() {
    this.recipeSearchForm = this.fb.group({
      recipe: ['', Validators.required],
    });
  }
}
