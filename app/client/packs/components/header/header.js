import "./header.css";
import "./static/logo.jpg";

// Another option will be to forgo image_tag altogether and load your
// images directly from CSS with an url helper included into your
// project by default along with Webpack’s css-loader.

// Then you can assign your image as the background
// CSS property to some element like so:
// .header {
//   &--logo {
//     width: 100px;
//     height: 100px;
//     margin-bottom: 25px;
//     background-image: url("./static/logo.png");
//     background-size: 100%;
//   }
// }

// In this case, you don’t even need to import the image in the JS file.
// Note that you can use url() for fonts too.

// The project’s repo contains examples of using SVG icons from CSS.
// If you want to inline SVGs, you can do it with postcss-inline-svg module.
