declare module "react-reveal/Fade" {
  import { Component } from "react";

  interface FadeProps {
    duration?: number;
    delay?: number;
    when?: boolean;
    children?: React.ReactNode;
    bottom?: boolean;
    collapse?: boolean;
  }

  export default class Fade extends Component<FadeProps> {}
}
