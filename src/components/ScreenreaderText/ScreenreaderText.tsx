/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps as ScreenreaderTextProps } from '../../util/BaseComponent/props';
import './ScreenreaderText.css';

export { ScreenreaderTextProps };

/**
 * A `ScreenreaderText` simply hides its content from sight without hiding it from screenreaders.
 * Use this component whenever a screenreader should be able to read aloud additional context for
 * your UI features.
 */
export default class ScreenreaderText extends React.Component<ScreenreaderTextProps> {
  public render() {
    const { className, children } = this.props;

    return <span className={join(['y-screenreaderText', className])}>{children}</span>;
  }
}
