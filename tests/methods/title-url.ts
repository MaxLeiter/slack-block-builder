import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const titleUrl = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.titleUrl,
    methodName: Prop.TitleUrl,
    propSetterPropName: Prop.TitleUrl,
    slackDtoParamName: SlackDto.mapParam(Prop.TitleUrl),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
