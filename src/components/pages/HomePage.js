import React from "react";
import { Link } from "react-router-dom";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
  TextField,
} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import { Container } from "@mui/system";

export default function HomePage() {
  const [value1, setValue1] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());
  const handleChangeFrom = (newValue) => {
    setValue1(newValue);
  };
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: ' 8px 20px 8px 8px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'inline',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `10px`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'inline',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const handleChangeTo = (newValue) => {
    setValue2(newValue);
  };
  const [age, setAge] = React.useState("");
  const [values, setValues] = React.useState({
    weight: '',
    weightRange: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeStatus = (event) => {
    setAge(event.target.value);
  };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#000000'),
    backgroundColor: '#FFBB00',
    "&:hover": {
      backgroundColor: '#FFBB00',
    },
  }));
  return (
    <Container>
    <div className="filterHolder" style={filterHolder}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="From"
          inputFormat="MM/dd/yyyy"
          value={value1}
          onChange={handleChangeFrom}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label="To"
          inputFormat="MM/dd/yyyy"
          value={value2}
          onChange={handleChangeTo}
          renderInput={(params) => <TextField {...params} />}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Status"
            onChange={handleChangeStatus}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Failed</MenuItem>
            <MenuItem value={20}>Success</MenuItem>
          </Select>
        </FormControl>
        <ColorButton variant="contained"><div style={{color: "black", fontWeight: 800}}>Lọc thông tin</div></ColorButton>
        <Search>
            <StyledInputBase
              placeholder="Tìm theo order Id"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
        </Search>
        <div>Tổng số đơn hàng: - Tổng số tiền order: </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </LocalizationProvider>
      </div>
    </Container>

  );
}
const filterHolder = {
  paddingTop: "30px",
};
