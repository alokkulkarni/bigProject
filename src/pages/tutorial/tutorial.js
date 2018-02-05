import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'diag': {
    'position': 'absolute',
    'zIndex': '1',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': '%V', 'value': 0.355 }, { 'unit': 'string', 'value': '!important' }]
  },
  'tutorialIcon': {
    'marginTop': [{ 'unit': '%V', 'value': 0.4 }],
    'fontSize': [{ 'unit': 'em', 'value': 7 }]
  },
  'h2': {
    'marginTop': [{ 'unit': '%V', 'value': 0.8 }, { 'unit': 'string', 'value': '!important' }],
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'p': {
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }]
  },
  'swiper-pagination-bullet-active': {
    'background': '#C400FF'
  },
  'swiper-pagination': {
    'bottom': [{ 'unit': '%V', 'value': 0.12 }, { 'unit': 'string', 'value': '!important' }]
  },
  '#skip': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': 'none !important',
    'textAlign': 'center',
    'cursor': 'pointer',
    'zIndex': '5'
  }
});
