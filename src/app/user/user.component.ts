import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  
    constructor(private userService: UserService) {
     
    }
  ngOnInit() {
    this.loadAllUsers();
  }
  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
}
deleteUser(id: number) {
  this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
}
}
