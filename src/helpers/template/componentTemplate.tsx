import React from "react";
import classNames from "classnames/dedupe";
import { cn } from "src/helpers/bem";
import { IProps, IState, defaultProps } from "./interface";
import "./ComponentStyles.scss";

const b = cn("bem-block-name");

export class ComponentTemplate extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const { className } = this.props;

    return <div className={classNames(b(), className)}></div>;
  }
}
