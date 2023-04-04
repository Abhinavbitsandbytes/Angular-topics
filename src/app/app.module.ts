import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './Component-communication/part1/parent/parent.component';
import { ChildComponent } from './Component-communication/part1/child/child.component';
import { Parent2Component } from './Component-communication/part2/parent/parent2.component';
import { Child2Component } from './Component-communication/part2/child/child2.component';
import { Parent3Component } from './Component-communication/part3/parent3/parent3.component';
import { Child3Component } from './Component-communication/part3/child3/child3.component';
import { DirComponentComponent } from './directive/dir-component/dir-component.component';
import { MydirectiveDirective } from './mydirective.directive';
import { FilterPipeCompComponent } from './pipes/filter-pipe-comp/filter-pipe-comp.component';
import { FilterPipe } from './filter.pipe';
import { ImpurePipeCompComponent } from './pipes/impure-pipe-comp/impure-pipe-comp.component';
import { FormCompComponent } from './form/form-comp/form-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Child3Component,
    DirComponentComponent,
    MydirectiveDirective,
    FilterPipeCompComponent,
    FilterPipe,
    ImpurePipeCompComponent,
    FormCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
