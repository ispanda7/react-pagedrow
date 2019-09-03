import Materialuitextinput from './materialuitextinput';
import Semanticuidropdown from './semanticuidropdown';
import BootstrapTooltip from './../util';
import Pdbutton from './pdbutton';
import React from 'react';
import './screen.css';

function render() {
    return <div className="screen-screen-9">
        <div className="screen-0">
            <div className="screen-text-3">Material UI By Me . Yes I do</div>
        </div>
        <div className="screen-1">
            <div className="screen-text-6">{"Username:"}</div>
            <div className="screen-forminput_instance-3">
                <Materialuitextinput value={this.props.username} hintText={"Type here"} errorText={(this.props.username == '' ? 'Type something' : '')} onChange={this.props.onChangeUsername} /> 
            </div>
        </div>
        <div className="screen-2">
            <div className="screen-text-0">Semantic UI</div>
        </div>
        <div className="screen-3">
            <div className="screen-instance_of_deleted_component-0">
                <Semanticuidropdown value={this.props.country} onChange={this.props.onChangeCountry} placeholder={"Country"} options={[{"text": "Brazil", "value": "Brazil"}, {"text": "USA", "value": "USA"}, {"text": "Germany", "value": "Germany"}]} /> 
            </div>
        </div>
        <div className="screen-4">
            <div className="screen-text-08">Bootstrap</div>
        </div>
        <div className="screen-5">
            <BootstrapTooltip placement={"right"} label={"Look at me!"}>
                <div className="screen-pdbutton_instance-1">
                    <Pdbutton text={"Click me"} state={"default"} /> 
                </div>
            </BootstrapTooltip>
        </div>
        <div className="screen-6">
            <div className="screen-text_3">
                {"The button above is done in Pagedraw, but the tooltip is from Boostrap. "}
            </div>
        </div>
        <div className="screen-7">
            <div className="screen-text_4">
                We use external components to implement it
            </div>
        </div>
        <div className="screen-8" /> 
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}