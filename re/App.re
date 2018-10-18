let component = ReasonReact.statelessComponent("HeaderNull");

let make = (_children) => {
  ...component,
  render: _self =>
    <div>
      <Home/>
    </div>,
};
