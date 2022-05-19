import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import MyEditor from './Editor'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  landingPage: {
    backgroundColor:"#e9ecef",
    paddingBottom: "10px",
    marginTop: "-10px"
  },
  buttongroup:{
    display:"flex",
    justifyContent: "space-around",
    border: "1px solid #adb5bd",
    borderRadius:"3px",
    marginTop: "16px",
    padding: "10px",
    '& .MuiButton-contained': {
      backgroundColor:"#f3f3f3",
      color: "black",
      '&:hover': {
        backgroundColor: '#5ac172',
        color: "white"
      }
    }
  },
  buttonVeiw: {
    backgroundColor: "#f3f3f3",
    color: "black",
    width:"48%",
  },
  mainDiv:{
    border:"1px solid #adb5bd",
    borderRadius:"3px"
  }
});

const LandingPage = () => {
  const classes = useStyles();
  const [editorTextLength, setEditorTextLength] = useState(0);
  return (
    <div className={classes.landingPage}>
    <div className='mx-4 my-2'>
      <Typography variant='h6' component='div' className='font-weight-bold pt-1'>
        Skriv social dokumentation
      </Typography>
      <Card className="px-2 py-2 mt-2">
        <div className='my-3'>
        <TextField
          fullWidth="true"
          label="Sammanfatta händelsen"
          id="outlined-size-small"
          defaultValue="Sammanfatta händelsen"
          size="small"
        />
        </div>
        <div className={classes.mainDiv}>
        <MyEditor editorTextLength={editorTextLength} setEditorTextLength={setEditorTextLength}/>
        </div>
        <div className='d-flex justify-content-between'>
        <span>Journal: Social dokumentation</span>
        <span>{editorTextLength}/1500</span>
        </div>
        <div className={classes.buttongroup}>
        <Button variant="contained" className={classes.buttonVeiw}>VERKSTADEN</Button>
        <Button variant="contained" className={classes.buttonVeiw}>BOENDAT</Button>
        </div>
      <div className='my-3'>   
       <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Klient</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          label="Klient"
          defaultValue="Gun Gunsson"
        >
          <MenuItem value="Gun Gunsson">Gun Gunsson</MenuItem>
          <MenuItem value="Cassandra Larsson"> Cassandra Larsson</MenuItem>
          <MenuItem value="Anders Andreason">Anders Andreason</MenuItem>
          <MenuItem value=" Eddie Lindh"> Eddie Lindh</MenuItem>
        </Select>
        <FormHelperText>Valj forst enhet</FormHelperText>
      </FormControl>
      </div>
      <div className='my-3'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Nyckelord</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          label="Nyckelord"
          defaultValue="Nyckelord"
        >
           <em>Barnets utveckling</em>
          <MenuItem value="Hälsa">Hälsa</MenuItem>
          <MenuItem value="Utbildning">Utbildning</MenuItem>
          <MenuItem value="Känslor och beteende">Känslor och beteende</MenuItem>
          <MenuItem value="Sociala relationer">Sociala relationer</MenuItem>
          <em>Familj och miljö</em>
          <MenuItem value="Familjebakgrund">Familjebakgrund</MenuItem>
          <MenuItem value="Boende">Boende</MenuItem>
          <MenuItem value="Arbete och ekonomi">Arbete och ekonomi</MenuItem>
          <MenuItem value="Socialt nätverk och integrering">Socialt nätverk och integrering</MenuItem>
          <MenuItem value="Nuvarande familjesituation">Nuvarande familjesituation</MenuItem>
          <em>Föräldrarnas förmåga</em>
          <MenuItem value="Stimulans och vägledning">Stimulans och vägledning</MenuItem>
          <MenuItem value="Känslomässig tillgänglighet">Känslomässig tillgänglighet</MenuItem>
          <MenuItem value="äkerhet">äkerhet</MenuItem>
          <MenuItem value="Grundläggande omsorg Bakdatera">Grundläggande omsorg Bakdatera</MenuItem>
          <MenuItem value="Arbete och ekonomi">Arbete och ekonomi</MenuItem>
        </Select>
      </FormControl>
      </div>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    </Card>

    </div>
    </div>
  );
};
export default LandingPage;
