declare module "react-progressive-bg-image"  {
  export interface ProgressiveBgImageProps {
    src: string;
    placeholder: string;
    opacity?: number;
    blur?: number;
    scale?: number;
    transition?: string;
    component?: string;
  }

  export default class ProgressiveBgImage extends React.Component<ProgressiveBgImageProps>{}
}
