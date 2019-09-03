import React from 'react';
import './pdbutton.css';

function render() {
    return <div className="pd-onactive-parent pd-onhover-parent pdbutton">
        { (this.props.state === "default") ?
            <div className="pdbutton-default-2">
                <div className="pdbutton-0-0-0">
                    <div className="pdbutton-rectangle-2">
                        <div className="pdbutton-0-0-0-0-0">
                            <div className="pdbutton-text_2">{ this.props.text }</div>
                        </div>
                    </div>
                </div>
            </div>
        : null}
        <div className="pd-onactive pdbutton-default_active-5">
            <div className="pdbutton-1-0">
                <div className="pdbutton-rectangle-0">
                    <div className="pdbutton-1-0-0-0">
                        <div className="pdbutton-text_2-5">
                            { this.props.text }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pd-onhover pdbutton-default_hover-8">
            <div className="pdbutton-2-0">
                <div className="pdbutton-rectangle-5">
                    <div className="pdbutton-2-0-0-0">
                        <div className="pdbutton-text_2-51">
                            { this.props.text }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}