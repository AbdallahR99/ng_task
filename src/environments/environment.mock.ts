import { EnvironmentType } from "@core/constants/environment-type.enum";
import { MockModule } from "@core/services/mock/mock.module";
import { baseEnvironment } from "./_base";

export const environment: typeof baseEnvironment = {
  ...baseEnvironment,
  type: EnvironmentType.Mock,
  serviceModules: [
    MockModule,
  ],
};
