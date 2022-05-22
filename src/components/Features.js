import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const colorPalette = [
  "color-secondary",
  "color-primary",
  "color-success",
  "color-warning",
];

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, i) => (
      <div key={item.text} className="has-text-centered column is-12">
        <section className="columns section">
          <div className="column is-6">
            <div
              style={{
                width: "100%",
                display: "inline-block",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className="has-text-left column is-6">
            <h4 style={{ textTransform: "uppercase" }}>{item.headline}</h4>
            <span
              className={`font-northwell is-size-0 ${colorPalette[i]} push-in push-up`}
            >
              {item.subheading}
            </span>
            <p className="is-size-4">{item.text}</p>
          </div>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
