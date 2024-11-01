import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  
categories: any[] = [];
selectedCategory: string = '';
competencelist: string[] = [];

constructor(private dataService: DataService) {}

ngOnInit() {
  this.loadCompetenceData();
}

loadCompetenceData() {
  this.dataService.getSCompetenceData().subscribe(data => {
    // Dynamically populate categories based on API response
    this.categories = Object.keys(data).map(key => ({
      label: this.formatCategoryLabel(key),
      value: key
    }));

    if (this.categories.length > 0) {
      this.selectedCategory = this.categories[0].value;
      this.competencelist = data[this.selectedCategory];
    }
  });
}

onCategoryChange(event: any) {
  this.selectedCategory = event.value;
  this.loadCompetenceDataForCategory();
}

loadCompetenceDataForCategory() {
  this.dataService.getSCompetenceData().subscribe(data => {
    this.competencelist = data[this.selectedCategory];
  });
}

private formatCategoryLabel(key: string): string {
  // Function to format keys into readable labels
  return key
    .replace(/_/g, ' ')
}
}