import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomMessageComponent } from '../components/custom-message/custom-message.component';

@Injectable()
export default class MessageService{
    constructor(
        private readonly router : Router,
        private snackBar : MatSnackBar
    ){}
    
    public showMessage(message : string, type : string,  needRedirect: boolean, redirectTo: string = ''){
        this.snackBar.openFromComponent(CustomMessageComponent,{
            data:message,
            horizontalPosition:'end',
            verticalPosition:'top',
            duration:1000,
            panelClass:type
        })
        .afterDismissed().subscribe(_ =>{ if(needRedirect) this.router.navigate([redirectTo]) })
    }
}