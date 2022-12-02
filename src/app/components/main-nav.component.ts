import { Component } from "@angular/core";

@Component({
    selector: 'main-nav',
    template: `
        <header>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="assets/images/dimbatips-official.png" alt="Dimbatips Logo" width="100">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <div class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <a [routerLink]="['/home']" class="nav-link" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" aria-current="page" >Home</a>
                            <a href="#" class="nav-link" routerLinkActive="active" >Predictions</a>
                            <a href="#" class="nav-link" routerLinkActive="active" >Betslip</a>
                            <a href="#" class="nav-link" routerLinkActive="active" >Livescores</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    `,
    styles: [
        `   
            nav { background-color: #673C95 !important; height: 50px; margin: 70px 0 15px; }
            nav a { color: #ede7f6; font-size: .85rem; font-weight: 500; text-transform: uppercase; letter-spacing: .05rem; }
            .navbar-nav a { margin: 0 5px;}
            .navbar-nav a:hover { text-decoration: underline;}
            .navbar-nav a.active { color: #ffa400 }

        `
    ]
})

export class MainNavComponent {

}