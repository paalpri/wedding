import React from "react";
import moment from "moment";
import { useTranslation } from "gatsby-plugin-react-i18next";

export const toCountdown = ({ from = moment(), until, t }) => {
  if (!until) return "";
  if (typeof from === "string") from = moment(from);
  const targetTime = moment(until);
  if (from.isAfter(until)) return "Tusen takk for at du kom, det var fantastisk";
  const timeBetween = moment.duration(targetTime.diff(from));
  return `${timeBetween.months()} Måneder ${timeBetween.days()} Dager ${timeBetween.hours()} Timer`;
};

const Countdown = (props) => {
  const { t } = useTranslation();
  const browser = typeof window !== "undefined" && window;

  return (
    <> 
      <h3
        className="counter has-text-centered"
        style={{ fontSize: "30px" }}
        {...props}
      >
        <span>&nbsp;{browser && toCountdown({ until: "2024-08-10", t }) }</span>
      </h3>
    </>
  );
};

export default Countdown;
