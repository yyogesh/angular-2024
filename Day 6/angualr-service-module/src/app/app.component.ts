import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { IUser } from './model/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  title = 'angualr-service-module';
  Users: IUser[] = [];

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
   this.Users = this.dataService.getUserData();
  }
}
