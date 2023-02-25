import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

interface Props {
  text: string;
  to?: string;
}

export const Button = (props: Props) =>
  props.to ? (
    <Link className="btn" to={props.to}>
      {props.text}
    </Link>
  ) : (
    <button className="btn">{props.text}</button>
  );
