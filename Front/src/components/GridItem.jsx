import React, { useState } from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Icon from './Icon';
import { Link } from 'react-router-dom';

const GridItem = ({ items }) => {
  const { title, path, number } = items;

  const [state, setState] = useState({
    fill: "white",
    stroke: "#09F53D"
  });

  return (
    <Link to={`/${title}`}>
      <div 
        className="griditem-sm w-[250px] h-[190px] border-[#D6DDEB] border-2 p-2 hover:bg-secondary flex flex-col gap-3 justify-center items-start pl-5"
        onMouseEnter={() => setState({ fill: "#09F53D", stroke: "white" })}
        onMouseLeave={() => setState({ fill: "white", stroke: "#09F53D" })}
      >
        <Icon color={state} path={path} className="griditem-icon" />
        <h1 className="font-poppins text-[1.5rem] font-bold">{title}</h1>
        <div className="flex justify-start items-center gap-1">
          <p>{number} jobs available</p>
          <ArrowRightIcon />
        </div>
      </div>
    </Link>
  );
};

export default GridItem;
