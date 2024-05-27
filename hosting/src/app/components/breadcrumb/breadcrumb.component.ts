import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { pathLib } from 'src/app/assets/const.store';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  readonly pathLib = pathLib;
  paths: string[] = [];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.paths = this.router.url.split('/');
  }

  concatPath(index: number): string {
    return `/${this.paths.slice(0, index+1).join('/')}`;
  }
}
