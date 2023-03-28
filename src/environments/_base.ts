import { EnvironmentType } from "@core/constants/environment-type.enum";
import { ApiModule } from "@core/services/api/api.module";


export const baseEnvironment = {
  type: EnvironmentType.Unknown,
  production: false,
  serviceModules: [
    ApiModule,
  ],
}
