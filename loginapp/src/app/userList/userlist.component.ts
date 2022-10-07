import { Component, OnInit} from '@angular/core';
import { UserService } from './userlist.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './userlist.component.html'
})

export class UserListComponent implements OnInit {
    userList:any[] = [];

    constructor(private user:UserService,
                private router:Router){}

    ngOnInit():void{
        this.user.userList()
            .subscribe((res:any[]) => this.userList = res)
    }

    logoutUser():void{
        localStorage.removeItem('Token_Number');
        localStorage.removeItem('Role_Type');
        this.router.navigate(['/login'])
    }

}