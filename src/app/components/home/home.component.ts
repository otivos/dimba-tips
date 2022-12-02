import { Component } from "@angular/core";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    opened: boolean = true;

    toggleSideNav(): void {
        this.opened = !this.opened;
    }
}