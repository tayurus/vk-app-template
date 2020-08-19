import React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import "./App.scss";
import { cn } from "src/helpers/bem";
import { IProps, IState } from "./interface";
import {withRouter} from "react-router";


const b = cn("app");

class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
  return <div>App</div>
  }

}


const connectedComponent = withRouter(App);
export {connectedComponent as App}