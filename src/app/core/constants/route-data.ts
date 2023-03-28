export enum RouteDataKeys {
  ShowLayout = 'showLayout',
}
export const routeData = {
  [RouteDataKeys.ShowLayout]: true,
}

export type RouteData =  Partial<typeof routeData & { [key: string]: any }>
