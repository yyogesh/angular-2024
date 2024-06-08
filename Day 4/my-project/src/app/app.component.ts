import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./product/product.component";
import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ProductComponent]
})
export class AppComponent {
  title = 'my-project';

  data: string[] = [];
  posts: any[] = [];

  constructor(private dataService: DataService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.data = this.dataService.getData();

    this.apiService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
