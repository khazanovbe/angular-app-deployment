import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TuiDataListModule, TuiRootModule } from '@taiga-ui/core';
import { TuiCheckboxBlockModule, TuiCheckboxModule, TuiDataListWrapperModule, TuiInputModule, TuiInputNumberModule, TuiRadioBlockModule, TuiSelectModule } from '@taiga-ui/kit';
import { AppComponent } from './app.component';
import { MetricsFormComponent } from './metrics-form/metrics-form.component';
import { MetricsFormModule } from './metrics-form/metrics-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebcamModule } from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: MetricsFormComponent,
    children: [
      {
        path: 'metrics-form',
        component: MetricsFormComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    TuiRootModule,
    TuiInputModule,
    TuiCheckboxBlockModule,
    TuiInputNumberModule,
    TuiRadioBlockModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    WebcamModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
