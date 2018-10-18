let component = ReasonReact.statelessComponent("Home");

let make = (_children) => {
  ...component,
  render: _self =>
    <div>
      <Title
        value="Welcome to React Native with ReasonML"
      />
    </div>,
};
