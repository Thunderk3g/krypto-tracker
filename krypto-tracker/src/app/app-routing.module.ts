import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyKryptoComponent } from './buy-krypto/buy-krypto.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { LoginComponent } from './login/login.component';
import { NftComponent } from './nft/nft.component';
import { Error404Component } from './shared/error404/error404.component';
import { SignupComponent } from './signup/signup.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'coin/:id', component: CoinDetailsComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'nft', component: NftComponent },
  { path: 'buy-krypto', component: BuyKryptoComponent },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
