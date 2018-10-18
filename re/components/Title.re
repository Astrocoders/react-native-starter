module Styles = {
  open Css;
  let text =
    style([
      fontFamily("Open Sans"),
      fontWeight(300),
      fontSize(px(32)),
    ]);
};

let component = ReasonReact.statelessComponent("Title");

let make = (~value, _children) => {
  ...component,
  render: _self =>
    <h1 className=Styles.text>
      {ReasonReact.string(value)}
    </h1>,
};
