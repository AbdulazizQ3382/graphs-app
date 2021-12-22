import { TitleComponent } from './title/title.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes , RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BarCharsComponent } from './bar-chars/bar-chars.component';


const routes: Routes = [
  { path: '', component: TitleComponent },
  { path: 'Bar-chars', component: BarCharsComponent },
  { path: 'Line-chars', component: LineChartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    LineChartComponent,
    NavbarComponent,
    BarCharsComponent,
    TitleComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    NgChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
