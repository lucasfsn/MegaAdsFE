import React from 'react';
import './Wrapper.css';

interface Props {
  children: React.ReactNode;
}

export const Wrapper = (props: Props) => (
  <div className="wrapper">{props.children}</div>
);
