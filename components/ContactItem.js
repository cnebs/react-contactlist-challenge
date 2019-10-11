import React from "react";
import formattedPhone from "../helpers/formatPhone.js"

const ContactItem = ({ firstName, lastName, phone, handlePush }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee"
      }}
    >
      <p>
        {firstName} <strong>{lastName}</strong>
      </p>
      <p>{formattedPhone(phone)}</p>
    </div>
  );
};

export default ContactItem;