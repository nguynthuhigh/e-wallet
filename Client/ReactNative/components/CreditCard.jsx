import React from "react";
import { StyleSheet } from "react-native";
import { CreditCardView } from "react-native-credit-card-input";
import constants from "../constants";
const { images } = constants;

const s = StyleSheet.create({
  cardView: {
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 15,
    overflow: "hidden",
  },
});

const CreditCard = ({
  focusedField = null,
  type,
  number,
  expiry,
  cvc,
  name,
}) => {
  return (
    <CreditCardView
      focusedField={focusedField}
      type={type}
      number={number}
      expiry={expiry}
      cvc={cvc}
      name={name}
      style={s.cardView}
      imageFront={images.visaCard}
      imageBack={images.visaCard}
      placeholders={{
        name: "Name on Card",
        number: "•••• •••• •••• ••••",
        expiry: "••/••",
        cvc: "•••",
      }}
    />
  );
};

export default CreditCard;
