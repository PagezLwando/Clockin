import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './shared/modules/materials/materials.module';
import { TopComponent } from './shared/layout/top/top.component';
import { MiddleComponent } from './shared/layout/middle/middle.component';
import { BottomComponent } from './shared/layout/bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MiddleComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
