import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../_models";

@Injectable({ providedIn: "root" })
export class UserService {
  readonly ROOT_URL = "https://fierce-ocean-24627.herokuapp.com";
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`/users`);
  }
  ///users/register
  //https://fierce-ocean-24627.herokuapp.com/api/v1/rest-auth/registration/
  // this.ROOT_URL + "/api/v1/rest-auth/registration/",
  register(user: User) {
    return this.http.post(
      '/users/register',
      user
    );
  }

  delete(id: number) {
    return this.http.delete(`/users/${id}`);
  }
}
