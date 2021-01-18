import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../context/authContext";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { FaBeer } from "react-icons/fa";

import { TodoListsState } from "../interface";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  })
);

const TodoList: React.FC = () => {
  const authCtx = useContext(AuthContext);

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [titles, setTitles] = useState([]);
  const [todoLists, setTodoLists] = useState<TodoListsState[]>([]);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

 {/* let ftodos = todoLists;
    axios
      .get(`api/todolists/${localStorage.getItem("userId")}`)
      .then((res) => {
        setTitles(res.data.todos);
        console.log(titles)
        return titles;

      })
      .then(titles =>
        titles.map(title => {
          axios
            .get(`api/todolist/${localStorage.getItem("userId")}/${ title}`)
            .then((res) => {
              ftodos.push({ title: title, todos: res.data.todoData });
              return ftodos;
            })
            .then((ftodos) => setTodoLists(ftodos));
          return todoLists;
        })
      );*/}

  const init = () => {
    axios
      .get(`/userTodoListData/${localStorage.getItem("userId")}`)
      .then((res) => {
        setTodoLists(res.data.todos);
      });
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={classes.root}>
      {todoLists.map((todoList) => {
        return (
          <Accordion
            key={todoList.title}
            expanded={expanded === todoList.title}
            onChange={handleChange(todoList.title)}>
            <AccordionSummary
              expandIcon={<FaBeer />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'>
              <Typography className={classes.heading}>
                {todoList.title}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                I am an accordion
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{}</AccordionDetails>
          </Accordion>
        );
      })}

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}>
        <AccordionSummary
          expandIcon={<FaBeer />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'>
          <Typography className={classes.heading}>General settings</Typography>
          <Typography className={classes.secondaryHeading}>
            I am an accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}>
        <AccordionSummary
          expandIcon={<FaBeer />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'>
          <Typography className={classes.heading}>Users</Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}>
        <AccordionSummary
          expandIcon={<FaBeer />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'>
          <Typography className={classes.heading}>Advanced settings</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}>
        <AccordionSummary
          expandIcon={<FaBeer />}
          aria-controls='panel4bh-content'
          id='panel4bh-header'>
          <Typography className={classes.heading}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TodoList;
