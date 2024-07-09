import styles from './Textarea.module.css'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: 'black' | 'blue';
  error?: string | undefined;
}
export const Textarea = ({ variant, error, ...rest }: Props) => {
  return (
    <textarea
      className={`${styles.textarea} ${styles[variant]} ${error && styles.error}`}
      {...rest}
    ></textarea>
  )
}
