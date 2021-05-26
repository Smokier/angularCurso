import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @ViewChild('appenHere', { static: false, read: ViewContainerRef })
  target!: ViewContainerRef;
  private componentRef: ComponentRef<any> | undefined;

  constructor(private resolver: ComponentFactoryResolver) {}

  addNewComponent() {
    let childComponent = this.resolver.resolveComponentFactory(CardComponent);
    this.componentRef = this.target.createComponent(childComponent);
  }
  ngOnInit(): void {}
}
