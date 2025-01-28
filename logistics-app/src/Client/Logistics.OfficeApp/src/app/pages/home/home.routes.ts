import {Routes} from "@angular/router";
import {Permissions} from "@/core/enums";
import {authGuard} from "@/core/guards";
import {HomeComponent} from "./home.component";

export const homeRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [authGuard],
    data: {
      breadcrumb: "Home",
      permission: Permissions.Loads.View,
    },
  },
];
