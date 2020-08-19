import React from "react";
import classNames from "classnames/dedupe";
import { cn } from "src/helpers/bem";
import { IProps, IState, defaultProps } from "./interface";
import "./AdminCategoriesList.scss";
import { Input } from "@vkontakte/vkui";
import Icon24ReorderIos from "@vkontakte/icons/dist/24/reorder_ios";
import Icon28ChevronRightOutline from "@vkontakte/icons/dist/28/chevron_right_outline";

const b = cn("admin-categories-list");

export class AdminCategoriesList extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const { className } = this.props;

    return (
      <div className={classNames(b(), className)}>
        <div className={b("title")}>Управление чеклистами</div>
        <Input placeholder="Поиск" className={b("search-input")} />
        <div className={b("categories-list")}>
          <div className={b("categories-item")}>
            <Icon24ReorderIos className={b("categories-item-icon")} />
            <div className={b("categories-item-title")}>Актуальное</div>
            <Icon28ChevronRightOutline className={b("categories-item-arrow")} />
          </div>
        </div>
      </div>
    );
  }
}
