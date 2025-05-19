import { FC } from "react";
import styles from './legal-block.module.scss';
import ActionButton from "@/components/action-button/ActionButton";
import { Form, Formik } from "formik";
import FormikInputField from "@/components/formik-input-field/FormikInputField";
import { legalSchema } from "@/app/schemas/legalSchema";

interface ILegalBlock {
    body: any;
    setNext: (values: any) => void;
}

const LegalBlock: FC<ILegalBlock> = ({ body, setNext }) => {

    const initialFormValues = {
        organization_name: body.personal?.organization_name || '',
        address: body.personal?.address || '',
        inn: body.personal?.inn || '',
        cpp: body.personal?.cpp || '',
        check: body.personal?.check || '',
        bank_name: body.personal?.bank_name || '',
        bik: body.personal?.bik || '',
        corporate_check: body.personal?.corporate_check || '',
        name: body.personal?.name || '',
        phone: body.personal?.phone || '',
        email: body.personal?.email || '',
    }

    const onFormSubmit = (formvalues: any) => {
        setNext({ personal: formvalues });
    };

    return (
        <div className={styles.legalBlock}>
            <Formik initialValues={initialFormValues} validationSchema={legalSchema} onSubmit={(formValues: any) => onFormSubmit(formValues)}>
                <Form>
                    <div className={styles.legalBlock__section}>
                        <div className={styles.legalBlock__section_container}>
                            <p className={styles.legalBlock__section_title}>Данные компании<span>*</span></p>
                            <div className={styles.legalBlock__column}>
                                <FormikInputField type="text" name="organization_name" placeholder="Название компании" className={styles.legalBlock__input} />
                                <FormikInputField type="text" name="address" placeholder="Юридический адрес (вкл. почтовый индекс)" className={styles.legalBlock__input} />
                                <FormikInputField type="text" name="inn" placeholder="ИНН" className={styles.legalBlock__input} />
                                <FormikInputField type="text" name="cpp" placeholder="КПП" className={styles.legalBlock__input} />
                                <FormikInputField type="text" name="check" placeholder="Расчетный счет" className={styles.legalBlock__input} />
                                <FormikInputField type="text" name="bank_name" placeholder="Наименование банка" className={styles.legalBlock__input} />
                                <FormikInputField type="text" name="bik" placeholder="БИК банка" className={styles.legalBlock__input} />
                                <FormikInputField type="text" name="corporate_check" placeholder="Корр. счет банка" className={styles.legalBlock__input} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.legalBlock__section}>
                        <div className={styles.legalBlock__section_container}>
                            <p className={styles.legalBlock__section_title}>Контактная информация<span>*</span></p>
                            <div className={styles.legalBlock__column}>
                                <FormikInputField type="text" name="name" placeholder="Контактное лицо" className={styles.legalBlock__input} />
                                <FormikInputField type="text" name="phone" placeholder="Телефон" className={styles.legalBlock__input} />
                                <FormikInputField type="email" name="email" placeholder="Email" className={styles.legalBlock__input} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.legalBlock__section}>
                        <div className={styles.legalBlock__section_container}>
                            <div className={styles.legalBlock__btn}>
                                <ActionButton text="Далее" onClick={() => null} type="medium-blue" inForm />
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default LegalBlock;