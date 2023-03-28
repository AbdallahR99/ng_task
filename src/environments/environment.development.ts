import { EnvironmentType } from "@core/constants/environment-type.enum";
import { baseEnvironment } from "./_base";

export const environment: typeof baseEnvironment = {
  ...baseEnvironment,
  type: EnvironmentType.Dev,
};
