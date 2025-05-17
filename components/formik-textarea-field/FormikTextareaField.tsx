import styles from './formik-textarea-field.module.scss';
import { useField } from 'formik';

type Props = {
    placeholder: string;
    name: string;
    disabled?: any;
    className?: any;
}

function FormikTextareaField({ placeholder, name, className, disabled }: Props) {

    const [field, meta] = useField(name);

    return (
        <div className={styles.inputFieldWrap}>
            <div className={`${styles.inputField} ${meta.error && meta.touched ? styles.inputFieldError : ''}`}>
                <textarea
                    disabled={disabled}
                    {...field} 
                    className={`${styles.inputField__input} ${className ? className : ''} `}
                    placeholder={placeholder}
                />
            </div>
            {meta.error && meta.touched && <p className={styles.inputField__err_text}>{meta.error}</p>}
        </div>
    )
}

export default FormikTextareaField;