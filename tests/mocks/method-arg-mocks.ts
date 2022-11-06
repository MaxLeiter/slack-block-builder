import { methodArgMocksByType } from './method-arg-mocks-by-type';

export const methodArgMocks = {
  blocks: methodArgMocksByType.arrayBlocks,
  actionId: methodArgMocksByType.string,
  blockId: methodArgMocksByType.string,
  title: methodArgMocksByType.string,
  text: methodArgMocksByType.string,
  confirm: methodArgMocksByType.confirmationDialog,
  confirmDialog: methodArgMocksByType.string,
  maxSelectedItems: methodArgMocksByType.int,
  deny: methodArgMocksByType.string,
  primary: methodArgMocksByType.primary,
  danger: methodArgMocksByType.danger,
  label: methodArgMocksByType.string,
  options: methodArgMocksByType.arrayOptions,
  value: methodArgMocksByType.string,
  description: methodArgMocksByType.string,
  url: methodArgMocksByType.string,
  elements: methodArgMocksByType.arrayElements,
  externalId: methodArgMocksByType.string,
  imageUrl: methodArgMocksByType.string,
  altText: methodArgMocksByType.string,
  element: methodArgMocksByType.element,
  hint: methodArgMocksByType.string,
  optional: methodArgMocksByType.bool,
  fields: methodArgMocksByType.arrayStrings,
  accessory: methodArgMocksByType.element,
  initialChannels: methodArgMocksByType.arrayStrings,
  initialChannel: methodArgMocksByType.string,
  responseUrlEnabled: methodArgMocksByType.bool,
  isDecimalAllowed: methodArgMocksByType.bool,
  initialOptions: methodArgMocksByType.arrayOptions,
  initialConversations: methodArgMocksByType.arrayStrings,
  defaultToCurrentConversation: methodArgMocksByType.bool,
  filter: methodArgMocksByType.arrayStrings,
  excludeExternalSharedChannels: methodArgMocksByType.bool,
  excludeBotUsers: methodArgMocksByType.bool,
  initialConversation: methodArgMocksByType.string,
  initialDate: methodArgMocksByType.date,
  minQueryLength: methodArgMocksByType.int,
  initialOption: methodArgMocksByType.option,
  optionGroups: methodArgMocksByType.optionGroups,
  placeholder: methodArgMocksByType.string,
  initialValueString: methodArgMocksByType.string,
  initialValueNumber: methodArgMocksByType.int,
  multiline: methodArgMocksByType.bool,
  minLength: methodArgMocksByType.int,
  maxLength: methodArgMocksByType.int,
  maxValue: methodArgMocksByType.int,
  minValue: methodArgMocksByType.int,
  initialUsers: methodArgMocksByType.arrayStrings,
  initialUser: methodArgMocksByType.string,
  channel: methodArgMocksByType.string,
  close: methodArgMocksByType.string,
  submit: methodArgMocksByType.string,
  clearOnClose: methodArgMocksByType.bool,
  notifyOnClose: methodArgMocksByType.bool,
  privateMetaData: methodArgMocksByType.string,
  callbackId: methodArgMocksByType.string,
  asUser: methodArgMocksByType.bool,
  threadTs: methodArgMocksByType.string,
  ts: methodArgMocksByType.string,
  replaceOriginal: methodArgMocksByType.bool,
  deleteOriginal: methodArgMocksByType.bool,
  responseType: methodArgMocksByType.ephemeral,
  postAt: methodArgMocksByType.timestamp,
  ephemeral: methodArgMocksByType.ephemeral,
  inChannel: methodArgMocksByType.inChannel,
  color: methodArgMocksByType.string,
  fallback: methodArgMocksByType.string,
  attachments: methodArgMocksByType.arrayAttachments,
  dispatchAction: methodArgMocksByType.bool,
  onEnterPressed: methodArgMocksByType.onEnterPressed,
  onCharacterEntered: methodArgMocksByType.onCharacterEntered,
  initialTime: methodArgMocksByType.time,
  initialDateTime: methodArgMocksByType.date,
  ignoreMarkdown: methodArgMocksByType.falseBool,
  submitDisabled: methodArgMocksByType.bool,
  focusOnLoad: methodArgMocksByType.bool,
  accessibilityLabel: methodArgMocksByType.string,
  authorName: methodArgMocksByType.string,
  providerIconUrl: methodArgMocksByType.string,
  providerName: methodArgMocksByType.string,
  titleUrl: methodArgMocksByType.string,
  thumbnailUrl: methodArgMocksByType.string,
  videoUrl: methodArgMocksByType.string,
};
