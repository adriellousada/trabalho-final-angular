import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'filmes',
        loadChildren: 'app/filmes/filmes.module#FilmesModule'
    },
    {
        path: 'artistas',
        loadChildren: 'app/artistas/artistas.module#ArtistasModule'
    },
    {
        path: 'trilhas',
        loadChildren: 'app/trilhas-sonoras/trilhas-sonoras.module#TrilhasSonorasModule'
    }

];
export const RoutingModule = RouterModule.forRoot(routes);