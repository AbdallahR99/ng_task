export enum AppRoutes {
  Home = '/',
  Error = '/error',
  Auth = '/auth',
  AuthLogin = '/login',
  AuthRegister = '/register',
  ErrorNotFound = '/not-found',
  ErrorUnknown = '/unknown',
  User = '/user',
  UserStatus = '/dashboard',
}

export const routePaths: {[key in keyof typeof AppRoutes]: string} = Object.fromEntries(
  Object.entries(AppRoutes).map(([key, value]) => [key, value.substring(1)])
) as {[key in keyof typeof AppRoutes]: string};
