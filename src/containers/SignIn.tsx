import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Avatar, Card, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import { GiKeyLock } from "react-icons/gi";
import { green } from "@material-ui/core/colors";
import classes from "*.module.css";

const SignIn: React.FC = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, redirectToReferrer } = values;

  

  const handleChange = (name: string) => (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    avatar: {
      color: '#fff',
      backgroundColor: green[500],
      width: theme.spacing(6),
      height: theme.spacing(6),
      margin: 'auto'
    },
  }),
);

const classes = useStyles();
  return (
    <Container maxWidth='sm' className='marginTopSignIn'>
      <Avatar className={classes.avatar} sizes='large'><GiKeyLock/></Avatar>
      <Typography variant='h3' color='primary'  align='center'>
        Sign In
      </Typography>
      <TextField
        id='email'
        label='Enter Email'
        value={email}
        onChange={handleChange("email")}
        fullWidth
        variant='outlined'
      />
      <div className='spaceY'>
        <TextField
          id='password'
          label='Entet password'
          value={password}
          onChange={handleChange("password")}
          type='password'
          fullWidth
          variant='outlined'
        />
      </div>
      <Button variant='contained' color='primary' fullWidth>
        submit
      </Button>
    </Container>
  );
};

export default SignIn;
