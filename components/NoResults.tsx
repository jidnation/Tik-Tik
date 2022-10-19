import React, { useState, useEffect, useRef } from "react";
import { NextPage } from "next";


interface IProps {
  text: string;
}

export const NoResults: NextPage<IProps> = ({ text }) => {
  return <div>NoResults</div>;
};
