import { StepControllerType } from "@/components/types/stepController";
import { FC } from "react";
import styles from './legal-block.module.scss';

interface ILegalBlock {
    setActive: (active: StepControllerType) => void;
}

const LegalBlock: FC<ILegalBlock> = ({ setActive }) => {
    return (
        <div className={styles.legalBlock}></div>
    )
}

export default LegalBlock;