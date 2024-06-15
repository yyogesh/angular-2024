import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IUser } from '../../model/user.interface';
import { Observable, Subject, Subscription, catchError, filter, finalize, takeUntil, tap } from 'rxjs';
import { ITodo } from '../../model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy {
  // Users: IUser[] = [];
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'cname'];
  dataSource: IUser[] = [];
  todos: ITodo[] = []
  todos$!: Observable<ITodo[]>

  private getUserDataFromAPISubscription!: Subscription;
  private getTodoDataFromAPISubscription!: Subscription;
  private subs: Subscription[] = [];
  destroy$: Subject<boolean> = new Subject();

  constructor(private readonly dataService: DataService) { }

  public ngOnInit(): void {
    this.getUserDataFromAPI();
    this.getTodoDataFromApi();
    this.getCountryList();
  }

  public ngOnDestroy(): void {
    // this.getUserDataFromAPISubscription?.unsubscribe();
    // this.getTodoDataFromAPISubscription?.unsubscribe();

    this.subs.forEach(sub => sub.unsubscribe());
    this.subs = [];

    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private getUserDataFromAPI() {
    // this.getUserDataFromAPISubscription = this.dataService.getUserDataFromAPI().subscribe(response => {
    //   this.dataSource = response;
    //   console.log(this.dataSource);
    //  })

    this.subs.push(this.dataService.getUserDataFromAPI().subscribe(response => {
      this.dataSource = response;
      console.log(this.dataSource);
    }));
  }

  private getCountryList() {
    this.subs.push(this.dataService.getCountryList().subscribe(response => {
      console.log(response);
    }));
  }

  private getTodoDataFromApi() {
    // this.getTodoDataFromAPISubscription = this.dataService.getTodoDataFromAPI().subscribe(response => {
    //   console.log(response);
    //  })
    this.todos$ = this.dataService.getTodoDataFromAPI();
    this.subs.push(this.dataService.getTodoDataFromAPI().subscribe(response => {
      console.log(response);
      this.todos = response;
    }))

    this.dataService.getTodoDataFromAPI().pipe(filter(response => response.length > 0)).subscribe(response => {
      console.log(response);
    });

    // showLoader
    this.dataService.getTodoMapDataFromAPI().pipe(filter(response => response.length > 0))
      .pipe(
        catchError(error => {
        console.log(error);
        return [];
      }),
      finalize(() => {
        // showLoader = false
        console.log('Sequence complete')
      })
    ).subscribe(response => {
        console.log(response);
      }, (error) => {
        console.log(error);
      }, () => {
        console.log('Sequence complete')
      });

      this.dataService.getTodoDataFromAPI()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          console.log(response);
          this.todos = response;
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          console.log('Sequence complete')
        }
      });

    this.dataService.getTodoDataFromAPI()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        console.log(response);
      });


    this.dataService.getTodoDataFromAPI()
      .pipe(
        tap(response => {
          console.log(response);
          this.todos = response;
        })
      ).subscribe(response => {
        console.log(response);
      });
  }
}
