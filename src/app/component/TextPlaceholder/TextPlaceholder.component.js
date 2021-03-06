/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MixType } from 'Type/Common';
import './TextPlaceholder.style';

/**
 * Text placeholder
 * @class TextPlaceholder
 */
class TextPlaceholder extends PureComponent {
    render() {
        const { content, length, mix } = this.props;
        if (content) return content;
        return <span mix={ mix } block="TextPlaceholder" mods={ { length } } />;
    }
}

TextPlaceholder.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.number
    ]),
    length: PropTypes.oneOf([
        'short',
        'medium',
        'long',
        'paragraph',
        'custom'
    ]),
    mix: MixType
};

TextPlaceholder.defaultProps = {
    content: '',
    length: 'short',
    mix: {}
};

export default TextPlaceholder;
