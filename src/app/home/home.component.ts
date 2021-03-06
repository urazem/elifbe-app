import { Component, OnInit } from "@angular/core";
import { User } from "../_models";
import { Router } from "@angular/router";
import { AuthenticationService } from "../_services/authentication.service";

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})
export class HomeComponent implements OnInit {
  ngOnInit() {}
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
