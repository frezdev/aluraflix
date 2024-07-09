import styles from './Select.module.css'

interface Value { id: number, title: string }
interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Value[];
  variant: 'black' | 'blue';
}

export const Select = ({ options = [], variant, id, ...rest }: Props) => {
  return (
    <div>
      <div className={styles["custom-select"]}>
        <select id={id} className={styles[variant]} {...rest}>
          <option hidden>Selecciona una categoría</option>
          {options.map((option) => (
            <option
              key={`${option.id}_select`}
              value={option.id}
            >
              {option.title}
            </option>
          ))}
        </select>
      </div>

    </div>
  )
}
