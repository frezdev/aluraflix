import styles from './LabelInput.module.css'

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}
export const LabelInput = ({ children, ...rest }: Props) => {
  return (
    <label className={styles.label} {...rest}>
      {children}
    </label>
  )
}
