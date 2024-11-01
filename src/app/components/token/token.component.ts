import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrl: './token.component.scss'
})
export class TokenComponent {
  total: number = 0;
  consumed: number = 0;


  constructor(private dataService: DataService) {}


  ngOnInit() {
      this.getTokenProgress();

  }
  


  getTokenProgress(): void {
    this.dataService.getTokenData().subscribe(data => {
      this.total = data.total;
      this.consumed = data.consumed;
    });
  }
}
