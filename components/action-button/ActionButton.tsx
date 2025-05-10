'use client';
import { FC } from "react";
import styles from './action-button.module.scss';

interface IActionButton {
  text: string,
  onClick: () => void,
}

const ActionButton: FC<IActionButton> = ({ text, onClick }) => {
  return (
    <button className={styles['action-button']} onClick={onClick}>
      {text}
    </button>
  )
}

export default ActionButton;