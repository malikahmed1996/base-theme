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
import TextPlaceholder from 'Component/TextPlaceholder';
import { MixType, ChildrenType } from 'Type/Common';
import './ExpandableContent.style';

class ExpandableContent extends PureComponent {
    constructor(props) {
        super(props);

        const { isContentExpanded } = this.props;
        this.state = { isContentExpanded };
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    toggleExpand() {
        this.setState(({ isContentExpanded }) => (
            { isContentExpanded: !isContentExpanded }
        ));
    }

    renderButton() {
        const { isContentExpanded } = this.state;
        const { heading, subHeading, mix } = this.props;

        return (
            <button
              block="ExpandableContent"
              elem="Button"
              mods={ { isContentExpanded } }
              mix={ { ...mix, elem: 'ExpandableContentButton' } }
              onClick={ this.toggleExpand }
            >
                <span
                  block="ExpandableContent"
                  elem="Heading"
                  mix={ { ...mix, elem: 'ExpandableContentHeading' } }
                >
                    <TextPlaceholder content={ heading } />
                </span>
                <span
                  block="ExpandableContent"
                  elem="SubHeading"
                  mix={ { ...mix, elem: 'ExpandableContentSubHeading' } }
                >
                    { subHeading }
                </span>
            </button>

        );
    }

    renderContent() {
        const { children, mix } = this.props;
        const { isContentExpanded } = this.state;
        const mods = { isContentExpanded };

        return (
            <div
              block="ExpandableContent"
              elem="Content"
              mods={ mods }
              mix={ { ...mix, elem: 'ExpandableContentContent', mods } }
            >
                { children }
            </div>
        );
    }

    render() {
        const { mix } = this.props;

        return (
            <article
              block="ExpandableContent"
              mix={ mix }
            >
                { this.renderButton() }
                { this.renderContent() }
            </article>
        );
    }
}

ExpandableContent.propTypes = {
    isContentExpanded: PropTypes.bool,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    children: ChildrenType.isRequired,
    mix: MixType.isRequired
};

ExpandableContent.defaultProps = {
    subHeading: '',
    heading: '',
    isContentExpanded: false
};

export default ExpandableContent;
