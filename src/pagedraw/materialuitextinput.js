import TextField from 'material-ui/TextField';

import React from 'react';
import './materialuitextinput.css';

function render() {
    return <div className="materialuitextinput-materialuitextinput-7">
        <TextField  fullWidth={true} {...this.props} />
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}