import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FtsLetContext } from './let.context';

@Directive({
  selector: '[ftsLet]',
})
export class FtsLetDirective<T> implements OnInit {
  @Input('ftsLet')
  data!: T;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<FtsLetContext<T>>
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(
      this.templateRef,
      new FtsLetContext<T>(this)
    );
  }

  static ngTemplateContextGuard<T>(
    directive: FtsLetDirective<T>,
    context: unknown
  ): context is FtsLetContext<Exclude<T, null | undefined>> {
    return true;
  }
}
