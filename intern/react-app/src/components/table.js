import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, TextField } from '@mui/material';

const rows = [
  { name: 'Rohini', SCORE: 100, CGPA: 10, PERCENTAGE: 2, SGPA: 5 },
  { name: 'Maha Lakshmi', SCORE: 70, CGPA: 9, PERCENTAGE: 10, SGPA: 5},
  { name: 'Ramya', SCORE: 10, CGPA: 10, PERCENTAGE: 20, SGPA: 0},
 
  { name: 'Yogitha', SCORE: 10, CGPA: 10, PERCENTAGE: 20, SGPA: 5 },
];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState(rows);

  const handleSearch = () => {
    const filteredResults = rows.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredRows(filteredResults);
  };

  return (
    <div style={{  background: `linear-gradient(45deg, #7ED7C1 30%, #009688  90%)`, padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '10px', textAlign: 'center' }}>
        <TextField
        style={{backgroundColor:"white"}}
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} style={{ marginLeft: '10px' }}>Search</button>
      </div>

      <TableContainer component={Paper} sx={{ width: '50vw', marginTop: '20px' }} >
        <Table aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell>NAMES</TableCell>
              <TableCell align="right">SCORE</TableCell>
              <TableCell align="right">CGPA&nbsp;(g)</TableCell>
              <TableCell align="right">PERCENTAGE&nbsp;(g)</TableCell>
              <TableCell align="right">SGPA&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.SCORE}</TableCell>
                <TableCell align="right">{row.CGPA}</TableCell>
                <TableCell align="right">{row.PERCENTAGE}</TableCell>
                <TableCell align="right">{row.SGPA}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Header;
