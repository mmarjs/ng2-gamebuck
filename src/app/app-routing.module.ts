import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { MyAccountComponent } from './components/my-account/my-account.component'
import { ProfileComponent } from './components/my-account/profile/profile.component'
import { FaqComponent } from './components/my-account/faq/faq.component'
import { HelpComponent } from './components/my-account/help/help.component'
import { HowToPlayComponent } from './components/my-account/how-to-play/how-to-play.component'
import { MyContestsComponent } from './components/contests/my-contests/my-contests.component'
import { StrategyComponent } from './components/strategy/strategy.component'
import { MyLineupsComponent } from './components/lineups/my-lineups/my-lineups.component'
import { LineupComponent } from './components/lineups/line-up/line-up.component'
import { CreateContestComponent} from './components/contests/create-contest/create-contest.component'
import { AddBucksComponent} from './components/add-bucks/add-bucks.components'
import { ContactUsComponent} from './components/contact-us/contact-us.component'
import { TermsOfUseComponent} from './components/terms-of-use/terms-of-use.component'
import { PrivacyComponent} from './components/privacy/privacy.component'
import { LegalityComponent} from './components/legality/legality.component'
import { HowItWorksComponent} from './components/how-it-works/how-it-works.component'

import { AuthGuard } from './guards/auth.guard.service';
import {CanDeactivateGuard} from './guards/can-deactivate-guard.service'

const appRoutes: Routes = [
    { path: 'lobby', component: LobbyComponent, canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent },
    { path: 'my-account/:tab', component:MyAccountComponent},
    { path: 'my-contests', component: MyContestsComponent },
    { path: 'strategy', component: StrategyComponent },
    { path: 'my-lineups', component: MyLineupsComponent },
    { path: 'lineup/:id', component:LineupComponent},
    { path: 'create-contest', component:CreateContestComponent},
    { path: 'add-bucks', component:AddBucksComponent},
    { path: 'contact', component:ContactUsComponent},
    { path: 'terms', component:TermsOfUseComponent},
    { path: 'privacy', component:PrivacyComponent},
    { path: 'legality', component:LegalityComponent},
    { path: 'how-it-works', component:HowItWorksComponent},
    // otherwise redirect to lobby
    { path: '', redirectTo: 'lobby', pathMatch:'full' },
    { path:"**", component:LobbyComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers:[CanDeactivateGuard],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
