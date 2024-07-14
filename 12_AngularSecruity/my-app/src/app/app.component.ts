import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './servies/login.service';
import { combineLatest, map, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

  constructor(private loginService: LoginService) {
    this.loginService.login().pipe(take(1)).subscribe(data => {

    });

   // this.loginService.login().pipe(map(users => users.map(user => user.name))

  //  const apple$ = this.stockService.getStockPrice('AAPL');
  //  const google$ = this.stockService.getStockPrice('GOOGL');
  //  const microsoft$ = this.stockService.getStockPrice('MSFT');


  //  combineLatest([apple$, google$, microsoft$]).subscribe(data => {

  //  })
  }
}
// ng g c user-profile --standalone
// ng g c user-profile --skips-test