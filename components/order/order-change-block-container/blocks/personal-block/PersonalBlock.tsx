import { FC, useState } from "react";
import styles from './personal-block.module.scss';
import PhysicalBlock from "../physical-block/PhysicalBlock";
import LegalBlock from "../legal-block/LegalBlock";

interface IPersonalBlock {
    body: any;
    setNext: (values: any) => void;
}

const PersonalBlock: FC<IPersonalBlock> = ({ body, setNext }) => {

    const [type, setType] = useState<'physical' | 'legal'>(body.personal?.organization_name ? 'legal' : 'physical');

    const handleChangeType = (type: 'physical' | 'legal') => {
        setType(type);
    }

    return (
        <div className={styles.personalBlock}>
            <div className={styles.personalBlock__section}>
                <p className={styles.personalBlock__section_title}>Тип плательщика</p>
                <div className={styles.personalBlock__types}>
                    <div
                        className={type === 'physical' ? styles.personalBlock__type_active : styles.personalBlock__type} 
                        onClick={() => handleChangeType('physical')}
                    >
                        <input type="radio" checked={type === 'physical'} readOnly />
                        <p className={styles.personalBlock__type_title}>Физическое лицо</p>
                    </div>
                    <div
                        className={type === 'legal' ? styles.personalBlock__type_active : styles.personalBlock__type}
                        onClick={() => handleChangeType('legal')}
                    >
                        <input type="radio" checked={type === 'legal'} readOnly />
                        <p className={styles.personalBlock__type_title}>Юридическое лицо</p>
                    </div>
                </div>
            </div>
            {type === 'physical' ? <PhysicalBlock setNext={setNext} body={body} /> : <LegalBlock setNext={setNext} body={body} />}
        </div>
    )
}

export default PersonalBlock;