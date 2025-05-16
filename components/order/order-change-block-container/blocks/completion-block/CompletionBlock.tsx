import { StepControllerType } from "@/components/types/stepController";
import { FC } from "react";
import styles from './completion-block.module.scss';

interface ICompletionBlock {
    setActive: (active: StepControllerType) => void;
}

const CompletionBlock: FC<ICompletionBlock> = ({ setActive }) => {
    return (
        <div className={styles.completionBlock}></div>
    )
}

export default CompletionBlock;