'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.less';
import assign from 'object-assign';

var Test = React.createClass({
  getInitialState() {
    return {
      placement: 'right',
      trigger: {
        hover: 1
      },
      offsetX: undefined,
      offsetY: undefined
    };
  },
  onPlacementChange(e) {
    this.setState({
      placement: e.target.value
    });
  },

  onTransitionChange(e) {
    this.setState({
      transitionName: e.target.checked ? e.target.value : ''
    });
  },

  onTriggerChange(e) {
    var trigger = assign({}, this.state.trigger);
    if (e.target.checked) {
      trigger[e.target.value] = 1;
    } else {
      delete trigger[e.target.value];
    }
    this.setState({
      trigger: trigger
    });
  },

  onOffsetXChange(e) {
    var targetValue = e.target.value;
    this.setState({
      offsetX: targetValue ? targetValue : undefined,
    });
  },

  onOffsetYChange(e) {
    var targetValue = e.target.value;
    this.setState({
      offsetY: targetValue ? targetValue : undefined,
    });
  },

  preventDefault(e) {
    e.preventDefault();
  },

  onVisibleChange(visible) {
    console.log('tooltip', visible);
  },

  render() {
    var trigger = this.state.trigger;
    return <div >
      <div style={{margin: '10px 20px'}}>
        <label>
          placement:
          <select value={this.state.placement} onChange={this.onPlacementChange}>
            <option>left</option>
            <option>right</option>
            <option>top</option>
            <option>bottom</option>
            <option>topLeft</option>
            <option>topRight</option>
            <option>bottomRight</option>
            <option>bottomLeft</option>
          </select>
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          <input value='rc-tooltip-zoom' type='checkbox' onChange={this.onTransitionChange}
                 checked={this.state.transitionName === 'rc-tooltip-zoom'}/>
          transitionName
        </label>

        &nbsp;&nbsp;&nbsp;&nbsp;

        trigger:

        <label>
          <input value='hover' checked={trigger.hover} type='checkbox' onChange={this.onTriggerChange}/>
          hover
        </label>
        <label>
          <input value='focus' checked={trigger.focus} type='checkbox' onChange={this.onTriggerChange}/>
          focus
        </label>
        <label>
          <input value='click' checked={trigger.click} type='checkbox' onChange={this.onTriggerChange}/>
          click
        </label>
        <br/>
        <label>
          offsetX:
          <input type='text' onChange={this.onOffsetXChange} style={{width:50}}/>
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          offsetY:
          <input type='text' onChange={this.onOffsetYChange} style={{width:50}}/>
        </label>
      </div>
      <div style={{margin: 100}}>
        <Tooltip placement={this.state.placement}
                 mouseEnterDelay={0}
                 mouseLeaveDelay={0.1}
                 trigger={Object.keys(this.state.trigger)}
                 onVisibleChange={this.onVisibleChange}
                 overlay={<span>i am a tooltip</span>}
                 align={{
                  offset:[this.state.offsetX, this.state.offsetY]
                 }}
                 transitionName={this.state.transitionName}>
          <a href='#' style={{margin: 20}} onClick={this.preventDefault}>trigger</a>
        </Tooltip>
      </div>
    </div>;
  }
});

ReactDOM.render(<div>
  <Test />
</div>, document.getElementById("__react-content"));
