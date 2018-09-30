import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

export class AdminService {

  showBreadcrumb = new EventEmitter<boolean>();

  constructor() { 
    this.showBreadcrumb.emit(false);
  }

}
