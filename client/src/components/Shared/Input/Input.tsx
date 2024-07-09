import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  variant: 'black' | 'blue';
  error?: string | undefined;
}
export const Input = ({ variant, id, error, ...rest }: Props) => {

  return (
    <div>
      <input
        id={id}
        className={`${styles.input} ${styles[variant]} ${error && styles.error}`}
        {...rest}
      />
    </div>
  )
}
