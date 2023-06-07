import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilsComponent } from './components/accueils/accueils.component';
import { OrganigrammeComponent } from './components/organigramme/organigramme.component';
import { HistoriqueComponent } from './components/historique/historique.component'
import { ActiviteComponent } from './components/activite/activite.component';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';
import { DepartementComponent } from './components/departements/departement/departement.component';
import { EvenementComponent } from './components/publication/evenement/evenement.component';
import { ProfilComponent } from './components/employer/profil/profil.component';
import { CreationDepartementComponent } from './components/departements/creation-departement/creation-departement.component';
import { DetailDepartementComponent } from './components/departements/detail-departement/detail-departement.component';
import { CreationEmployerComponent } from './components/employer/creation-employer/creation-employer.component';
import { TestTemplateComponent } from './components/test-template/test-template.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { componentFactoryName } from '@angular/compiler';
import { UpdateEventComponent } from './components/publication/updateEvent/update-event/update-event.component';
import { CommuniqueridComponent } from './components/publication/communiquer/communiquerid/communiquerid/communiquerid.component';
import { ListeemployerComponent } from './components/employer/listeemployer/listeemployer.component';
import { AjoutEvenementComponent } from './components/publication/evenement/ajout-evenement/ajout-evenement.component';
import { AjoutCommuniquerComponent } from './components/publication/communiquer/ajout-communiquer/ajout-communiquer.component';
import { CommuniquerComponent } from './components/publication/communiquer/communiquer.component';
import { ConsignemetierComponent } from './components/publication/consignemetier/consignemetier.component';
import { AjoutconsignemetierComponent } from './components/publication/Consignemetier/ajoutconsignemetier/ajoutconsignemetier.component';
import { ListeEvenementComponent } from './components/publication/evenement/listeEvenement/liste-evenement/liste-evenement.component';
import { ListCommuniquerComponent } from './components/publication/communiquer/ListCommuniquer/list-communiquer/list-communiquer.component';
import { ListConsignemetierComponent } from './components/publication/consignemetier/ListConsignemetier/list-consignemetier/list-consignemetier.component';
import { AllEventComponent } from './components/publication/all-event/all-event.component';
import { ResumedataComponent } from './components/resumedata/resumedata/resumedata.component';

const routes: Routes = [
  {path:'sidebar',component:SidebarComponent,
  children:[
    {path:'listConsigne',component:ListConsignemetierComponent},
     {path:'listeCommuniquer',component:ListCommuniquerComponent},
     {path:'testtemplate',component:TestTemplateComponent},
     {path:'creationEmployer',component:CreationEmployerComponent},
     {path:'detailDepartement/:id',component:DetailDepartementComponent},
     {path:'creationDepartement',component:CreationDepartementComponent},
     {path:'profil/:id',component:ProfilComponent},
     {path:'listeEmployer',component:ListeemployerComponent},
     {path:'Evenement/:id',component:EvenementComponent},
     {path:'Communiquer',component:CommuniquerComponent},
     {path:'ConsigneMetier',component:ConsignemetierComponent},
     {path:'departement',component:DepartementComponent},
     {path:'',component:TestComponent},
     {path:'ajoutEvenement',component:AjoutEvenementComponent},
     {path:'ajoutCommuniquer',component:AjoutCommuniquerComponent},
     {path:'ajoutConsigneMetier',component:AjoutconsignemetierComponent},
     {path:'ListEvenement',component:ListeEvenementComponent},
     {path:'allEvent',component:AllEventComponent},
     {path:'communiquerid/:id',component:CommuniqueridComponent},
     {path:'updateEvent/:id',component:UpdateEventComponent},
     {path:'resumeData',component:ResumedataComponent}
  ]},
 /* {path:'listEvenement',component:ListeEvenementComponent},
  {path:'ajoutEvenement',component:AjoutEvenementComponent},
  {path:'listeEmployer',component:ListeemployerComponent},
  {path:'testtemplate',component:TestTemplateComponent},
  {path:'creationEmployer',component:CreationEmployerComponent},
  {path:'detailDepartement/:id',component:DetailDepartementComponent},
  {path:'creationDepartement',component:CreationDepartementComponent},
  {path:'profil/:id',component:ProfilComponent},
  {path:'Evenement/:id',component:EvenementComponent },
  {path:'departement',component:DepartementComponent},
  {path:'test',component:TestComponent},*/
  {path:'login',component:LoginComponent },
  {path:'Activite',component:ActiviteComponent},
  {path:'',component:AccueilsComponent},
  {path:'Organigramme',component:OrganigrammeComponent},
  {path:'Historique',component:HistoriqueComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
