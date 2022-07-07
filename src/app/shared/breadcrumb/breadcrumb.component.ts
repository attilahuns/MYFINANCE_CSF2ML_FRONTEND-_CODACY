import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';
export interface IBreadCrumb {
  label: string;
  url: string;
}
@Component({
  selector: 'f2ml-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[];

  constructor( private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    })
  }

  /**
   * Recursively build breadcrumb according to activated route.
   * @param route
   * @param url
   * @param breadcrumbs
   */
  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
    var path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    // If the route is dynamic route such as ':id', remove it
    let lastRoutePart = path?.split('/').pop();
    const isDynamicRoute = lastRoutePart!?.startsWith(':');
    if(isDynamicRoute && !!route.snapshot) {
       const paramName = lastRoutePart?.split(':')[1];
       path = path?.replace(lastRoutePart!, route.snapshot.params[paramName!]);
       label = route.snapshot.params[paramName!];
    }
    let split =  this.router.url.split('/');
    url = "/" + split[1] + "/" + split[2];
    const nextUrl = path ? `${url}/${path}` : url;
    const breadcrumb: IBreadCrumb = {
        label: label,
        url: nextUrl,
    };
    const newBreadcrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
    if (route.firstChild) {
        return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
