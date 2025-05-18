import styles from "@/components/section/sections.module.scss";
import {FC} from "react";

interface SectionProps {
    title: string;
    stylesName: keyof typeof styles;
}

const Section: FC<SectionProps> = ({ title, stylesName }) => {

    return (
        <main className={`container`}>
            <div className={styles[stylesName]}>
                <h2 className={`h2-header`}>{title}</h2>
            </div>

        </main>
    )
}

export default Section