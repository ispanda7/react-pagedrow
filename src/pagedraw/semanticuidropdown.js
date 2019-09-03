import {Dropdown} from 'semantic-ui-react';

import React from 'react';
import './semanticuidropdown.css';

function render() {
    return <div className="semanticuidropdown-semanticuidropdown-1">
        <Dropdown fluid selection {...this.props} />
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}