import { FC, useState } from "react";
import styles from './checkout-block.module.scss';
import ActionButton from "@/components/action-button/ActionButton";
import { Form, Formik, useFormikContext } from "formik";
import FormikInputField from "@/components/formik-input-field/FormikInputField";
import Switcher from "@/components/switcher/Switcher";
import FormikTextareaField from "@/components/formik-textarea-field/FormikTextareaField";

const deliveryTypes = [
    { id: 0, title: 'Самовывоз в Москве', subtitle: 'Для заказов по Москве', price: 'Бесплатно', time: 'Завтра' },
    { id: 1, title: 'Курьер по Москве', subtitle: 'Курьерская доставка в пределах МКАД', price: '1 000 ₽', time: 'До 3 дней' },
    { id: 2, title: 'Почтой России', subtitle: 'Для заказов по России', price: 'от 500 ₽', time: 'До 5 дней' },
    { id: 3, title: 'СДЭК до ПВЗ', subtitle: 'Для заказов по России', price: 'от 500 ₽', time: 'До 4 дней' },
];

const paymentTypes = [
    { id: 0, title: 'Система быстрых платежей', img: '/fastPay.png' },
    { id: 1, title: 'SberPay', img: '/sberPay.png' },
    { id: 2, title: 'Банковской картой', img: '/bankPay.png' },
    { id: 3, title: 'Банковский перевод', img: '/bankTransfer.png' },
];

interface ICheckoutBlock {
    body: any;
    setNext: (values: any) => void;
    setPrev: (values: any) => void;
}

const CheckoutBlock: FC<ICheckoutBlock> = ({ body, setNext, setPrev }) => {

    const initialFormValues = {
        city: body.checkout?.city || '',
        delivery_address: body.checkout?.delivery_address || '',
        index: body.checkout?.index || '',
        comment: body.checkout?.comment || '',
        delivery_type: body.checkout?.delivery_type || deliveryTypes[0],
        payment_type: body.checkout?.payment_type || paymentTypes[0]
    }


    const onFormSubmit = (formvalues: any) => {
        setNext({ checkout: formvalues });
        console.log('RESULTING BODY:', { ...body, checkout: formvalues })
    };

    return (
        <div className={styles.checkoutBlock}>
            <Formik initialValues={initialFormValues} onSubmit={(formValues: any) => onFormSubmit(formValues)}>
                {({ values }) => (
                    <Form>
                        <div className={styles.checkoutBlock__section}>
                            <div className={styles.checkoutBlock__section_container}>
                                <p className={styles.checkoutBlock__section_title}>Тип доставки</p>
                                <Switcher data={deliveryTypes} type="multi" name="delivery_type" />
                            </div>
                        </div>
                        {values.delivery_type.id ? (
                            <div className={styles.checkoutBlock__section}>
                                <div className={styles.checkoutBlock__section_container}>
                                    <p className={styles.checkoutBlock__section_title}>Данные для доставки</p>
                                    <div className={styles.checkoutBlock__column}>
                                        <FormikInputField type="text" name="city" placeholder="Город" className={styles.checkoutBlock__input} />
                                        <FormikInputField type="text" name="delivery_address" placeholder="Адрес доставки" className={styles.checkoutBlock__input} />
                                        <FormikInputField type="text" name="index" placeholder="Индекс" className={styles.checkoutBlock__input} />
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        <div className={styles.checkoutBlock__section}>
                            <div className={styles.checkoutBlock__section_container}>
                                <p className={styles.checkoutBlock__section_title}>Дополнительная информация</p>
                                <FormikTextareaField name="comment" placeholder="Комментарий" className={styles.checkoutBlock__input} />
                            </div>
                        </div>
                        <div className={styles.checkoutBlock__section}>
                            <div className={styles.checkoutBlock__section_container}>
                                <p className={styles.checkoutBlock__section_title}>Метод оплаты</p>
                                <Switcher data={paymentTypes} type="default" name="payment_type" />
                            </div>
                        </div>
                        <div className={styles.checkoutBlock__section}>
                            <div className={styles.checkoutBlock__section_container}>
                                <div className={styles.checkoutBlock__btns}>
                                    <div className={styles.checkoutBlock__btn}>
                                        <BackButton onClick={setPrev} />
                                    </div>
                                    <div className={styles.checkoutBlock__btn}>
                                        <ActionButton text="Оплатить" onClick={() => null} type="medium-blue" inForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CheckoutBlock;


const BackButton: FC<{ onClick: (values: any) => void }> = ({ onClick }) => {
    const { values } = useFormikContext();

    return (
        <ActionButton text="Назад" onClick={() => onClick({ checkout: values })} type="medium-grey" />
    );
};