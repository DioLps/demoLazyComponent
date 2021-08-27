import { ComponentFactoryResolver } from '@angular/core';
import { ComponentRef } from '@angular/core';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicCompsModel } from './dynamic-comps.model';

@Component({
  selector: 'app-dynamic-comps',
  template: ` <ng-template> </ng-template>`,
})
export class DynamicCompsComponent implements OnInit {
  @Input() public dynamicComponent!: DynamicCompsModel;
  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewRef!: ViewContainerRef;
  constructor(private compFactResol: ComponentFactoryResolver) {}

  public async ngOnInit(): Promise<void> {
    const loadedComponent = await this.dynamicComponent.url;
    const cmp = this.compFactResol.resolveComponentFactory(
      loadedComponent[this.dynamicComponent.className]
    );
    const cmpref: ComponentRef<any> = this.templateViewRef.createComponent(cmp);
    cmpref.instance.data = this.dynamicComponent.data;
  }
}
