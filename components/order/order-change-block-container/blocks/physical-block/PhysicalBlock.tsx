import { StepControllerType } from "@/components/types/stepController";
import { FC } from "react";
import styles from './physical-block.module.scss';

interface IPhysicalBlock {
    setActive: (active: StepControllerType) => void;
}

const PhysicalBlock: FC<IPhysicalBlock> = ({ setActive }) => {
    return (
        <div className={styles.physicalBlock}></div>
    )
}

export default PhysicalBlock;