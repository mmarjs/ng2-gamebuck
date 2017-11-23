import { Component, NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent }  from './components/home/home.component';
import {RegisterComponent} from './components/home/register/register.component'
import {LoginComponent} from './components/home/login/login.component'
import {LobbyComponent} from './components/lobby/lobby.component'
import {HeaderBannerComponent} from './components/header-banner/header-banner.component'
import {FooterBannerComponent} from './components/footer-banner/footer-banner.component'
import {MyAccountComponent} from './components/my-account/my-account.component'
import {ProfileComponent} from './components/my-account/profile/profile.component'
import {FaqComponent} from './components/my-account/faq/faq.component'
import {HowToPlayComponent} from './components/my-account/how-to-play/how-to-play.component'
import {HelpComponent} from './components/my-account/help/help.component'
import {MyContestsComponent} from './components/contests/my-contests/my-contests.component'
import {StrategyComponent} from './components/strategy/strategy.component'
import {MyLineupsComponent} from './components/lineups/my-lineups/my-lineups.component'
import {LineupComponent} from './components/lineups/line-up/line-up.component'
import { CreateContestComponent} from './components/contests/create-contest/create-contest.component'
import { AddBucksComponent} from './components/add-bucks/add-bucks.components'
import { ContactUsComponent} from './components/contact-us/contact-us.component'
import { TermsOfUseComponent} from './components/terms-of-use/terms-of-use.component'
import { PrivacyComponent} from './components/privacy/privacy.component'
import { LegalityComponent} from './components/legality/legality.component'
import { HowItWorksComponent} from './components/how-it-works/how-it-works.component'

import {AppRoutingModule} from './app-routing.module'
import {UserService} from './services/user.service'
import {ContestService} from './services/contest.service'
import {AuthenticationService} from './services/authentication.service'
import {AuthGuard} from './guards/auth.guard.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sportingbucks-app',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {
  constructor() {
  }
}

@NgModule({
  imports:      [ BrowserModule ,
                  FormsModule,
                  HttpModule,
                  AppRoutingModule,
                  NgbModule.forRoot()],

  declarations: [ HomeComponent,
                  RegisterComponent,
                  LoginComponent ,
                  LobbyComponent,
                  HeaderBannerComponent,
                  FooterBannerComponent,
                  MyAccountComponent,
                  ProfileComponent,
                  FaqComponent,
                  HowToPlayComponent,
                  HelpComponent,
                  MyContestsComponent,
                  StrategyComponent,
                  MyLineupsComponent,
                  LineupComponent,
                  CreateContestComponent,
                  AddBucksComponent,
                  ContactUsComponent,
                  TermsOfUseComponent,
                  PrivacyComponent,
                  LegalityComponent,
                  HowItWorksComponent,
                  App],

  providers:    [AuthenticationService,
                 UserService,
                 ContestService,
                 AuthGuard],

  entryComponents: [RegisterComponent,
                    LoginComponent],
                    
  bootstrap:    [ App ]
})
export class AppModule { }
