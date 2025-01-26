declare module "react-reveal/Fade" {
  import { Component } from "react";

  interface FadeProps {
    duration?: number;
    delay?: number;
    when?: boolean;
    children?: React.ReactNode;
    bottom?: boolean;
    top?: boolean;
    left?: boolean;
    right?: boolean;
    collapse?: boolean;
  }

  export default class Fade extends Component<FadeProps> {}
}

declare module "react-reveal/Zoom" {
  import { Component } from "react";

  interface ZoomProps {
    duration?: number;
    delay?: number;
    when?: boolean;
    children?: React.ReactNode;
    bottom?: boolean;
    top?: boolean;
    left?: boolean;
    right?: boolean;
  }

  export default class Zoom extends Component<ZoomProps> {}
}
