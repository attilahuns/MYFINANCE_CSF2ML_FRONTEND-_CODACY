export interface SidenavMenuItem {
  title: string;
  notification: boolean;
  path: string;
  icon?: string;
  subMenu?: SidenavMenuItem[];
}
