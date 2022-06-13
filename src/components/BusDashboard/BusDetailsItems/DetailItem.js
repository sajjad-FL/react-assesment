import React from "react";
import { timeMeridianCalculation } from "../../../utils/utils";
import Card from "../../UI/Card";
import AvailableBuses from "./AvailableBuses";
import CardHearderItem from "./CardHearderItem";
import classes from "./css/DetailItem.module.css";

function DetailItem(props) {
  return (
    <Card>
      <div className={classes.detail_sub_container}>
        <AvailableBuses image={props.image} name={props.name} />

        <CardHearderItem
          p1={timeMeridianCalculation(props?.pickupTime)}
          p2={props.pickupStation}
        />

        <CardHearderItem
          p1={props?.travelTime}
          p2={props?.distanceCovered + " Km"}
        />

        <CardHearderItem
          p1={timeMeridianCalculation(props?.destinationTime)}
          p2={props.destinationStation}
        />

        <div className={classes.detail_info_container}>
          <p>Rs {"  " + props?.price + "  "} /- </p>
          <p>{props.seats} Seats Left</p>
          <button onClick={(e) => props.bookSeat(e, props?.id)}>
            Seat Info
          </button>
        </div>
      </div>
    </Card>
  );
}

export default DetailItem;
