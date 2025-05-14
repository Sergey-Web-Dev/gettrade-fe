'use client';
import { FC } from "react";
import styles from './action-button.module.scss';
import cn from "classnames";

interface IActionButton {
  text: string,
  type: 'small-blue' | 'medium-blue' | 'small-grey' | 'medium-grey'
  onClick: () => void,
}


const ActionButton: FC<IActionButton> = ({ text, type, onClick }) => {

  const buttonClass = cn({
    [styles['small-blue-action-button']]: type === 'small-blue',
    [styles['medium-blue-action-button']]: type === 'medium-blue',
    [styles['small-grey-action-button']]: type === 'small-grey',
    [styles['medium-grey-action-button']]: type === 'medium-grey',
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  )
}

export default ActionButton;