'use client';

import { FC, useState } from "react";
import styles from './order-content.module.scss';
import StepController from "@/components/step-controller/StepController";
import OrderChangeBlockContainer from "../order-change-block-container/OrderChangeBlockContainer";

const STEPS = [
    { id: 0, title: 'Личные данные', active: 'personal' },
    { id: 1, title: 'способ доставки и оплата', active: 'сheckout' },
    { id: 2, title: 'завершение', active: 'completion' },
];

const OrderContent: FC= () => {

    const [step, setStep] = useState<number>(STEPS[0].id);
    const [body, setBody] = useState({});

    const next = (values: any) => {
        setStep((prev: number) => ++prev);
        setBody((prevBody) => ({
            ...prevBody,
            ...values,
        }));
    };

    const back = (values: any) => {
        setStep((prev: number) => --prev);
        setBody((prevBody) => ({
            ...prevBody,
            ...values,
        }));
    };

    return (
        <div className={styles.orderContent}>
            <StepController data={STEPS} active={step} />
            <div className={styles.orderContent__container}>
                <OrderChangeBlockContainer active={step} setNext={next} setPrev={back} body={body} />
            </div>
        </div>
    )
}

export default OrderContent;