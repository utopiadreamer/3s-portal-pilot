export interface LayoutMenuItem {
  id: string;
  title: string;
  icon: string;
  href: string;
  queryString?: string;
  roles?: number[] | string[];
  showBadge?: boolean;
  subItems?: LayoutMenuItem[];
}
