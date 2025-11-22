export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type MessageProps ={
    msg: string
    type: 'error' | 'success'
}

export interface FormComponentProps<T extends Record<string> = Record<string, string>> {
  inputs: InputProps[];
  buttons: ButtonProps[];
  message?: MessageProps | null;
  onSubmit?: (data: T) => void;
}
