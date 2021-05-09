import { BitBuilder } from '../base';
import { SlackDto } from '../lib';
import {
  HasDescription,
  HasEnd,
  HasText,
  HasUrl,
  HasValue,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getMarkdownObject } from '../helpers';

import type { ObjectLiteral } from '../types';

export interface OptionParams {
  description?: string;
  text?: string;
  url?: string;
  value?: string;
}

export interface OptionBuilder extends HasDescription,
  HasEnd,
  HasText,
  HasUrl,
  HasValue,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/composition-objects#option
 * @@displayName Option
 */

export class OptionBuilder extends BitBuilder {
  constructor(params?: OptionParams) {
    super(params);
  }

  public build({ isMarkdown }: ObjectLiteral = { isMarkdown: false }): SlackDto {
    const augmentedProps = {
      text: isMarkdown
        ? getMarkdownObject(this.props.text)
        : getPlainTextObject(this.props.text),
      description: isMarkdown
        ? getMarkdownObject(this.props.description)
        : getPlainTextObject(this.props.description),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(OptionBuilder, [
  HasDescription,
  HasEnd,
  HasText,
  HasUrl,
  HasValue,
]);
