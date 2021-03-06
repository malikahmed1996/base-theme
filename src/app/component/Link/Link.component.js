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

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { stringify } from 'rebem-classname';
import { ChildrenType } from 'Type/Common';

class Link extends PureComponent {
    render() {
        const {
            to,
            children,
            ...props
        } = this.props;

        if (!to) {
            return (
                <div { ...props }>
                    { children }
                </div>
            );
        }

        if (/^https?:\/\//.test(to)) {
            return (
                <a href={ to } { ...props }>
                    { children }
                </a>
            );
        }

        return (
            <RouterLink
              to={ to }
              { ...props }
              className={ stringify(this.props) }
              { ...props }
            >
                { children }
            </RouterLink>
        );
    }
}

Link.propTypes = {
    to: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    children: ChildrenType.isRequired
};

export default Link;
