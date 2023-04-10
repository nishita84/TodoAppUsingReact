import * as React from "react";
import Card from "@mui/material/Card";
import "../Style/style.css";
import TextField from "@mui/material/TextField";

export default function BasicCard() {
  const [todo, setTodo] = React.useState(" ");
  const [count, setCount] = React.useState(0);

  console.log(count);
  return (
    <Card className="decoratedcard">
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <span>Button was clicked {count} times </span>
    </Card>
  );
}
