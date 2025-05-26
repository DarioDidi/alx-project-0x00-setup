export interface PillProps {
  title: string
}

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

export interface ButtonProps {
  title: string;
  styles: string;
  handleClick?: () => void;
  type?: ButtonType;
  disabled?: boolean;
}


