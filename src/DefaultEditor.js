import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {PanelMenuWrapper} from './components';
import {localize} from './lib';
import {
  GraphCreatePanel,
  StyleLayoutPanel,
  StyleAxesPanel,
  StyleLegendPanel,
  StyleNotesPanel,
  StyleShapesPanel,
  StyleImagesPanel,
  StyleTracesPanel,
  StyleColorbarsPanel,
} from './default_panels';

const DefaultEditor = ({localize: _}) => (
  <Fragment>
    <PanelMenuWrapper>
      <GraphCreatePanel group={_('Graph')} name={_('Create')} />
      <StyleTracesPanel group={_('Style')} name={_('Traces')} />
      <StyleLayoutPanel group={_('Style')} name={_('Layout')} />
      <StyleNotesPanel group={_('Style')} name={_('Notes')} />
      <StyleAxesPanel group={_('Style')} name={_('Axes')} />
      <StyleLegendPanel group={_('Style')} name={_('Legend')} />
      <StyleColorbarsPanel group={_('Style')} name={_('Color Bars')} />
    </PanelMenuWrapper>
  </Fragment>
);

DefaultEditor.propTypes = {
  localize: PropTypes.func,
};

export default localize(DefaultEditor);
