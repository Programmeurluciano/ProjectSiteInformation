import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JwPaginationModule } from 'jw-angular-pagination';
import { SearchFilterPipe } from './SearchFilterPipe/search-filter-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilsComponent } from './components/accueils/accueils.component';
import { HeaderComponent } from './headers/header/header.component';
import { FooterComponent } from './Footers/footer/footer.component';
import { OrganigrammeComponent } from './components/organigramme/organigramme.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { ActiviteComponent } from './components/activite/activite.component';
import { LoginComponent } from './components/login/login.component';
import { HeadercoComponent } from './headers/headerco/headerco/headerco.component';
import { TestComponent } from './components/test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartementComponent } from './components/departements/departement/departement.component';
import { EvenementComponent } from './components/publication/evenement/evenement.component';
import { ProfilComponent } from './components/employer/profil/profil.component';
import { CreationDepartementComponent } from './components/departements/creation-departement/creation-departement.component';
import { DetailDepartementComponent } from './components/departements/detail-departement/detail-departement.component';
import { CreationEmployerComponent } from './components/employer/creation-employer/creation-employer.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {enableProdMode} from '@angular/core';
import { ListeemployerComponent } from './components/employer/listeemployer/listeemployer.component';
import { TestTemplateComponent } from './components/test-template/test-template.component';
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { AjoutEvenementComponent } from './components/publication/evenement/ajout-evenement/ajout-evenement.component';
import { CommuniquerComponent } from './components/publication/communiquer/communiquer.component';
import { AjoutCommuniquerComponent } from './components/publication/communiquer/ajout-communiquer/ajout-communiquer.component';
import { ConsignemetierComponent } from './components/publication/consignemetier/consignemetier.component';
import { AjoutconsignemetierComponent } from './components/publication/Consignemetier/ajoutconsignemetier/ajoutconsignemetier.component';
import { ListeEvenementComponent } from './components/publication/evenement/listeEvenement/liste-evenement/liste-evenement.component';
import { AuthintercptorService } from './services/authintercptor/authintercptor.service';
import { ListConsignemetierComponent } from './components/publication/consignemetier/ListConsignemetier/list-consignemetier/list-consignemetier.component';
import { ListCommuniquerComponent } from './components/publication/communiquer/ListCommuniquer/list-communiquer/list-communiquer.component';
import { AllEventComponent } from './components/publication/all-event/all-event.component';
import { CommuniqueridComponent } from './components/publication/communiquer/communiquerid/communiquerid/communiquerid.component';
import { UpdateEventComponent } from './components/publication/updateEvent/update-event/update-event.component';
import { ResumedataComponent } from './components/resumedata/resumedata/resumedata.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilsComponent,
    HeaderComponent,
    FooterComponent,
    OrganigrammeComponent,
    HistoriqueComponent,
    ActiviteComponent,
    LoginComponent,
    HeadercoComponent,
    TestComponent,
    DepartementComponent,
    EvenementComponent,
    ProfilComponent,
    CreationDepartementComponent,
    DetailDepartementComponent,
    CreationEmployerComponent,
    ListeemployerComponent,
    TestTemplateComponent,
    SidebarComponent,
    AjoutEvenementComponent,
    CommuniquerComponent,
    ListeEvenementComponent,
    AjoutCommuniquerComponent,
    ConsignemetierComponent,
    AjoutconsignemetierComponent,
    ListConsignemetierComponent,
    ListCommuniquerComponent,
    AllEventComponent,
    SearchFilterPipe,
    CommuniqueridComponent,
    UpdateEventComponent,
    ResumedataComponent
  ],
  imports: [
    JwPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthintercptorService, multi: true}],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
enableProdMode();
