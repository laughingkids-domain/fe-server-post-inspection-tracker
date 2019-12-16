import {css} from "@emotion/core";

const MapViewStyle = {
  container: css`
    &::after{
      clear:both;
    }
    width: 100%;
    float: left;
  `,
  listContainer: css`
    width: 28%;
  `,
  mapContainer: css`
    width: 72%;
  `
}

export default MapViewStyle;