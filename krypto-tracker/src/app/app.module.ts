import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { LearnComponent } from './learn/learn.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { BuyKryptoComponent } from './buy-krypto/buy-krypto.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgHttpLoaderModule } from 'ng-http-loader';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { NftComponent } from './nft/nft.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { Error404Component } from './shared/error404/error404.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    CoinDetailsComponent,
    LoaderComponent,
    LearnComponent,
    WatchlistComponent,
    BuyKryptoComponent,
    NftComponent,
    Error404Component
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
