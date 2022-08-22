import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

@Component({
    selector: 'gp-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition(
                'expanded <=> collapsed',
                animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
            ),
        ]),
    ],
})
export class UsersComponent implements OnInit {
    users: UserModel[] = [];
    columnsToDisplay = ['name', 'username', 'address', 'email', 'phone'];
    columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    expandedElement: UserModel | null;

    constructor(
        private auth: AuthService,
        private router: Router,
        private usersService: UsersService
    ) {
        this.salir();
    }

    ngOnInit(): void {
        this.usersService.getUsers().subscribe((resp) => {
            this.users = resp;
            console.log(resp);
        });
    }
    // 900000 15minutos
    salir() {
        setTimeout(() => {
            this.auth.logout();
            this.router.navigate(['/login']);
        }, 900000);
    }
}
