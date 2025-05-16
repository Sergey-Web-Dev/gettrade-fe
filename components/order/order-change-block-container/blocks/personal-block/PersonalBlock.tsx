import { StepControllerType } from "@/components/types/stepController";
import { FC } from "react";
import styles from './personal-block.module.scss';

interface IPersonalBlock {
    setActive: (active: StepControllerType) => void;
}

const PersonalBlock: FC<IPersonalBlock> = ({ setActive }) => {
    return (
        <div className={styles.personalBlock}>
            
        </div>
    )
}

export default PersonalBlock;