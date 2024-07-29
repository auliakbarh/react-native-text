import React from 'react';
import { Text as RNText } from 'react-native';

import config from './Text.component.config';
import type { Props } from './Text.component.types';

const Text: React.FC<Props> = ({ children, ...props }) => {
  return <RNText {...props}>{children}</RNText>;
};

Text.displayName = config.displayName;

export default Text;
