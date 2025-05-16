'use client';

import { FC, useState } from "react";
import styles from './order-content.module.scss';
import StepController from "@/components/step-controller/StepController";
import OrderChangeBlockContainer from "../order-change-block-container/OrderChangeBlockContainer";
import { StepControllerType } from "@/components/types/stepController";

const STEPS = [
    { id: 0, title: 'Личные данные', active: 'personal' },
    { id: 1, title: 'способ доставки и оплата', active: 'сheckout' },
    { id: 2, title: 'завершение', active: 'completion' },
];

const OrderContent: FC= () => {

    const [step, setStep] = useState<StepControllerType>(STEPS[0]);

    return (
        <div className={styles.orderContent}>
            <StepController data={STEPS} active={step} />
            <div className={styles.orderContent__container}>
                <OrderChangeBlockContainer active={step.active} setActive={setStep} />
            </div>
        </div>
    )
}

export default OrderContent;