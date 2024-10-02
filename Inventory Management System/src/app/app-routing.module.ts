import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { WarehouseComponent } from './warehouse/warehouse/warehouse.component';
import { WarehouseModule } from './warehouse/warehouse.module';

import { RawComponent } from './inventory/raw/raw.component';
import { ProductComponent } from './inventory/product/product.component';
import { ProjectComponent } from './inventory/project/project.component';
import { ProdlineComponent } from './prod/prodline/prodline.component';
import { StockComponent } from './prod/stock/stock.component';
import { PurqComponent } from './sap/purq/purq.component';
import { PurcdetComponent } from './sap/purcdet/purcdet.component';
import { PreqComponent } from './sap/preq/preq.component';
import { RawconComponent } from './warehouse/rawcon/rawcon.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },

                    {path: 'warehouse',loadChildren:()=> import('./warehouse/warehouse-routing.module').then(m => m.WarehouseRoutingModule)},
                    { path: 'rawcon', component: RawconComponent },
                    {path: 'sales',loadChildren:()=> import('./sap/sap.module').then(m => m.SapModule)},
                    { path: 'purcq', component: PurqComponent },
                    { path: 'purcd', component: PurcdetComponent },
                    { path: 'purcr', component: PreqComponent },
                    {path: 'invent',loadChildren:()=> import('./inventory/inventory.module').then(m => m.InventoryModule)},
                    { path: 'raw', component: RawComponent },
                    { path: 'products', component: ProductComponent },
                    { path: 'projects', component: ProjectComponent },
                    {path: 'clients',loadChildren:()=> import('./bas/bas.module').then(m => m.BasModule)},
                    {path: 'prod',loadChildren:()=> import('./prod/prod.module').then(m => m.ProdModule)},
                    { path: 'prodline', component: ProdlineComponent },
                    { path: 'stock', component: StockComponent },
                     { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
