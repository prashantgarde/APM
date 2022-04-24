import {Component} from "@angular/core";

@Component({
    selector:"pm-title",
    templateUrl:"./page-title.component.html"
})

export class PageTitleComponent{
    pageTitle : string = 'Acme Product Management';
}