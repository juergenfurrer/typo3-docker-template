declare class VenoBox {
  constructor(options?: VenoBoxOptions);
}

declare class VenoBoxOptions
{
  selector?: string;
  autoplay?: boolean;
  bgcolor?: string;
  border?: string;
  customClass?: boolean | string;
  infinigall?: boolean;
  maxWidth?: string;
  navigation?: boolean;
  navKeyboard?: boolean;
  navTouch?: boolean;
  navSpeed?: number;
  numeration?: boolean;
  overlayClose?: boolean;
  overlayColor?: string;
  popup?: boolean;
  ratio?: '1x1' | '4x3' | '16x9' | '21x9' | 'full';
  share?: boolean;
  shareStyle?: 'block' | 'pill' | 'transparent' | 'bar';
  spinColor?: string;
  spinner?: 'plane' | 'chase' | 'bounce' | 'wave' | 'pulse' | 'flow' | 'swing' | 'circle' | 'circle-fade' | 'grid' | 'fold' | 'wander';
  titleattr?: string;
  titlePosition?: 'top' | 'bottom';
  titleStyle?: 'block' | 'pill' | 'transparent' | 'bar';
  toolsBackground?: string;
  toolsColor?: string;
}
