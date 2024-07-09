import styles from './Textarea.module.css'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: 'black' | 'blue';
}
export const Textarea = ({ variant, ...rest }: Props) => {
  return (
    <textarea
      className={`${styles.textarea} ${styles[variant]}`}
      {...rest}
    ></textarea>
  )
}
