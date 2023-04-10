import * as React from "react";
import Card from "@mui/material/Card";
import "../Style/style.css";
import TextField from "@mui/material/TextField";

export default function BasicCard() {
  const [input, setInput] = React.useState(null);
  const [show, setShow] = React.useState(false);

  const getInput = (prop) => {
    setInput(prop.target.value);
    setShow(false);
  };

  return (
    <Card className="decoratedcard">
      <TextField
        onChange={getInput}
        id="standard-basic"
        label="Standard"
        variant="standard"
      ></TextField>
      {show ? <span>{input}</span> : null}
      <button onClick={() => setShow(true)}> Add to todo list </button>
    </Card>
  );
}
