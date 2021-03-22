import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function SidebarButtonItems({ Icon, title, number, sidebar }) {
  const classes = useStyles();
  return (
    <>
      {sidebar ? (
        <BadgeButton className={classes.root}>
          <Badge color="secondary" badgeContent={number}>
            <Icon />
          </Badge>
        </BadgeButton>
      ) : (
        <ButtonWrapper>
          <Icon />
          {title ? <p>{title}</p> : ""}

          {number ? <span>{number}</span> : ""}
        </ButtonWrapper>
      )}
    </>
  );
}

export default SidebarButtonItems;

const ButtonWrapper = styled.a`
  display: grid;
  grid-template-columns: 18% auto min-content;
  align-items: center;
  background-color: white;
  padding: 5px 20px;
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  margin-right: 4px;
  letter-spacing: 0.2px;
  transition: border-radius 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    margin 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    width 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  .MuiSvgIcon-root {
    font-size: 18px;
    color: gray;
  }
  p {
    font-size: 0.875rem;
    color: gray;
    font-weight: 400;
  }
  span {
    display: none;
    color: gray;
    font-weight: 400;
    font-size: "0.875rem";
  }
  &:hover {
    background-color: #fcecec;

    p {
      color: #1c1427;
      font-weight: 400;
    }
    span {
      display: inline;
      color: #1c1427;
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`;
const BadgeButton = styled.div`
  margin-left: 10px;
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  .MuiSvgIcon-root {
    font-size: 18px;
    color: gray;
  }
`;
