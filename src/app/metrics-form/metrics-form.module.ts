import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsFormComponent } from './metrics-form.component';
import { TuiCheckboxBlockModule, TuiCheckboxModule, TuiDataListWrapperModule, TuiInputComponent, TuiInputModule, TuiInputNumberModule, TuiRadioBlockModule, TuiSelectModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TuiButtonModule, TuiDataListModule, TuiLoaderModule } from '@taiga-ui/core';
import { WebcamModule } from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http';
import {TuiTableModule} from '@taiga-ui/addon-table';




@NgModule({
  declarations: [
    MetricsFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiCheckboxModule,
    TuiCheckboxBlockModule,
    TuiRadioBlockModule,
    TuiInputNumberModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiButtonModule,
    WebcamModule,
    HttpClientModule,
    TuiTableModule,
    TuiLoaderModule,
  ]
})
export class MetricsFormModule { }
