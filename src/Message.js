import React from "react";
import "./Message.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function Message({ message, username }) {
  const isUser = username === message.username;

  return (
    <div className={`message ${isUser && `message__user`}`}>
      <Card>
        <CardContent
          className={isUser ? "message__userCard" : "message__guestCard"}
        >
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username}: `} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
