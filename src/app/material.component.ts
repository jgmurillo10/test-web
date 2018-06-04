import { MatButtonModule, MatMenuModule, MatMenuItemModule } from '@angular/material';

@NgModule({
  imports: [ MatButtonModule, MatMenuModule, MatMenuItemModule ],
  exports: [ MatButtonModule, MatMenuModule, MatMenuItemModule ],
})
export class MaterialComponent { }