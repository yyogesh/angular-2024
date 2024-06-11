import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IUser } from '../../model/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  // Users: IUser[] = [];
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'cname'];
  dataSource: IUser[] = [];
  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
   // this.Users = this.dataService.getUserData();
   //this.dataSource = this.dataService.getUserData();

   this.dataService.getUserDataFromAPI().subscribe(response => {
    this.dataSource = response;
    console.log(this.dataSource);
   })
  }
}
