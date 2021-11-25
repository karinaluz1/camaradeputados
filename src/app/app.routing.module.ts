import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ConsultasComponent } from "./consultas/consultas.component";
import { HomeComponent } from "./home/home.component";
import { PerfilComponent } from "./perfil/perfil.component";

const routes = [
  {path: "", component: HomeComponent},
  {path: "consultas", component: ConsultasComponent},
  {path: "deputado/:id", component: PerfilComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
