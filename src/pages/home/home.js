import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'circle-loader': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'borderLeftColor': '#5cb85c',
    'animationIterationCount': 'infinite',
    'animationTimingFunction': 'linear',
    'position': 'relative',
    'display': 'inline-block',
    'verticalAlign': 'top'
  },
  'circle-loader': {
    'borderRadius': '50%',
    'width': [{ 'unit': 'em', 'value': 8 }],
    'height': [{ 'unit': 'em', 'value': 8 }]
  },
  'circle-loader:after': {
    'borderRadius': '50%',
    'width': [{ 'unit': 'em', 'value': 8 }],
    'height': [{ 'unit': 'em', 'value': 8 }]
  },
  'load-complete': {
    'WebkitAnimation': 'none',
    'animation': 'none',
    'borderColor': '#5cb85c',
    'transition': 'border 500ms ease-out'
  },
  'checkmark': {
    'display': 'none'
  },
  'checkmarkdraw:after': {
    'animationDuration': '800ms',
    'animationTimingFunction': 'ease',
    'animationName': 'checkmark',
    'transform': 'scaleX(-1) rotate(135deg)'
  },
  'checkmark:after': {
    'opacity': '1',
    'height': [{ 'unit': 'em', 'value': 4 }],
    'width': [{ 'unit': 'em', 'value': 2 }],
    'transformOrigin': 'left top',
    'borderRight': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#5cb85c' }],
    'borderTop': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#5cb85c' }],
    'content': '''',
    'left': [{ 'unit': 'em', 'value': 2 }],
    'top': [{ 'unit': 'em', 'value': 4 }],
    'position': 'absolute'
  }
});
