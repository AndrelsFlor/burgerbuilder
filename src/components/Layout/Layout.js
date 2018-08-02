import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
// O COMPONENTE AUX SERVE APENAS PARA WRAPAR O JSX, PRA N DER ERRO

const layout = props => (
  <Aux>
    <div> Toolbar, SideDrawer, BackDrop </div>
    <main className={classes.content}>{props.children}</main>
  </Aux>
);

export default layout;
