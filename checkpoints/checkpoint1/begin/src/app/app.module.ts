import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  LfBootstrapThemeModule,
  LF_BOOTSTRAP_THEME_SERVICES,
} from '@lightweightform/bootstrap-theme';
import {
  LF_APP_I18N,
  LfCoreModule,
  LF_APP_SCHEMA,
  LF_CORE_SERVICES,
  LF_I18N_LANGUAGE_QUERY_PARAM,
} from '@lightweightform/core';
import {MobxAngularModule} from 'mobx-angular';
import {appSchema} from './app.schema';

import {AppRoutingModule} from './app-routing.module';

import {APP_I18N} from './app.i18n';

@NgModule({
  imports: [
    BrowserModule,
    LfBootstrapThemeModule,
    LfCoreModule,
    MobxAngularModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    /*TODO CP1: add all the components you have created to the declarations vector*/
  ],
  providers: [
    {provide: LF_APP_SCHEMA, useValue: appSchema},
    {
      provide: LF_APP_I18N,
      useValue: APP_I18N,
    },
    {provide: LF_I18N_LANGUAGE_QUERY_PARAM, useValue: 'l'},
    LF_CORE_SERVICES,
    LF_BOOTSTRAP_THEME_SERVICES,
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
