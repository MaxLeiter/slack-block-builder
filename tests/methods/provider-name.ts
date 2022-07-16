import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const providerName = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.providerName,
    methodName: Prop.ProviderName,
    propSetterPropName: Prop.ProviderName,
    slackDtoParamName: SlackDto.mapParam(Prop.ProviderName),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
