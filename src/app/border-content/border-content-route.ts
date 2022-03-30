import { RouterModule, Routes } from '@angular/router';
import { BorderContentComponent } from './border-content.component';

export const BorederContentRoutes:Routes=[
    {
        path:'',
        children:[{
            path:'',
            component:BorderContentComponent
        }]
    }
]
