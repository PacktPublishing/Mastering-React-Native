import { StyleSheet } from 'react-native';
import platformStyles from './platform';

const { PAGE_CONTAINER_STYLE, TEXT_STYLE } = platformStyles;

export const BG_COLOR = '#343336';
export const BAR_COLOR = '#4e4d52';
export const TEXT_COLOR = '#e5dbda';
export const HEADER_TEXT_COLOR = '#fff';
export const MUTED_COLOR = '#8e8786';
export const LINK_COLOR = '#48e9d9';
export const ACCENT_COLORS = ['#d31d65', '#751c53', '#c248c0', '#7d6e8b', '#bbc6f7'];
export const LIGHT_OVERLAY_COLOR = '#fff2';

export const COMMON_STYLES = StyleSheet.create({
  pageContainer: {
    backgroundColor: BG_COLOR,
    flex: 1,
    ...PAGE_CONTAINER_STYLE
  },
  text: {
    color: TEXT_COLOR,
    ...TEXT_STYLE
  }
});
