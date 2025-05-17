import { FC } from "react";
import styles from './step-controller.module.scss';
import { StepControllerType } from "../types/stepController";

interface IStepController {
    data: StepControllerType[];
    active: number;
}

const StepController: FC<IStepController> = ({ data, active }) => {
    return (
        <ul className={styles.switcher}>
            {data && data.map((item: StepControllerType) => (
                <li
                    key={item.id}
                    className={item.id === active ? styles.switcher__item_active : styles.switcher__item}
                >
                    {item.title}
                </li>
            ))}
        </ul>
    )
}

export default StepController;