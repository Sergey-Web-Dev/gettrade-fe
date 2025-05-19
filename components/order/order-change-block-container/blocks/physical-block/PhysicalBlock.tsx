import { FC } from "react";
import styles from './physical-block.module.scss';
import ActionButton from "@/components/action-button/ActionButton";
import { Form, Formik } from "formik";
import { physicalSchema } from "@/app/schemas/physicalSchema";
import FormikInputField from "@/components/formik-input-field/FormikInputField";

interface IPhysicalBlock {
    body: any;
    setNext: (values: any) => void;
}

const PhysicalBlock: FC<IPhysicalBlock> = ({ body, setNext }) => {

    const initialFormValues = {
        name: body.personal?.name || '',
        phone: body.personal?.phone || '',
        email: body.personal?.email || '',
    }

    const onFormSubmit = (formvalues: any) => {
        setNext({ personal: formvalues });
    };

    return (
        <div className={styles.physicalBlock}>
            <Formik initialValues={initialFormValues} validationSchema={physicalSchema} onSubmit={(formValues: any) => onFormSubmit(formValues)}>
                <Form>
                    <div className={styles.physicalBlock__section}>
                        <div className={styles.physicalBlock__section_container}>
                            <p className={styles.physicalBlock__section_title}>Личные данные<span>*</span></p>
                            <FormikInputField type="text" name="name" placeholder="ФИО" className={styles.physicalBlock__input} />
                        </div>
                    </div>
                    <div className={styles.physicalBlock__section}>
                        <div className={styles.physicalBlock__section_container}>
                            <p className={styles.physicalBlock__section_title}>Контактная информация<span>*</span></p>
                            <div className={styles.physicalBlock__column}>
                                <FormikInputField type="text" name="phone" placeholder="Телефон" className={styles.physicalBlock__input} />
                                <FormikInputField type="email" name="email" placeholder="Email" className={styles.physicalBlock__input} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.physicalBlock__section}>
                        <div className={styles.physicalBlock__section_container}>
                            <div className={styles.physicalBlock__btn}>
                                <ActionButton text="Далее" onClick={() => null} type="medium-blue" inForm />
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default PhysicalBlock;