import styles from './Input.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: 'black' | 'blue';
}
export const Input = ({ variant, id, ...rest }: Props) => {
  return (
    <div>
      <input id={id} className={`${styles.input} ${styles[variant]}`} {...rest} />
    </div>
  )
}
