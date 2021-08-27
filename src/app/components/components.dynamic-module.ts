import { DynamicCompsModel } from '../dynamic-comps/dynamic-comps.model';

export class Components {
  public static getComponents(): Array<DynamicCompsModel> {
    return [
      {
        url: import('./demo1'),
        className: 'Demo1Component',
      },
      {
        url: import('./demo2'),
        className: 'Demo2Component',
      },
      {
        url: import('./demo3'),
        className: 'Demo3Component',
      },
    ];
  }
}
