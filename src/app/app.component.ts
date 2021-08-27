import { Component } from '@angular/core';
import { ApiMockService } from './api-mock.service';
import { Components } from './components/components.dynamic-module';
import { DynamicCompsModel } from './dynamic-comps/dynamic-comps.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public dynamicComponentsRef: Array<DynamicCompsModel>;

  constructor(private service: ApiMockService) {
    this.dynamicComponentsRef = [];
  }

  public loadAll(): void {
    const mySub = this.service
      .getPage()
      .subscribe((pages: Array<DynamicCompsModel>) => {
        this.dynamicComponentsRef = this.importsComponents(pages);
        mySub.unsubscribe();
      });
  }

  public cleanAll(): void {
    this.dynamicComponentsRef = [];
  }

  private importsComponents(
    pages: Array<DynamicCompsModel>
  ): Array<DynamicCompsModel> {
    return pages.map((page: DynamicCompsModel): DynamicCompsModel => {
      const foundComponent = this.findComponentByClassName(page.className);
      if (foundComponent) {
        page.url = foundComponent.url;
      }
      return page;
    });
  }

  private findComponentByClassName(
    className: string
  ): DynamicCompsModel | undefined {
    return Components.getComponents().find(
      (component: DynamicCompsModel) => component.className === className
    );
  }
}
