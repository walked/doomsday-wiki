import React from 'react';
import Divider from '@material-ui/core/Divider';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { cards } from '../../tools/scryfall';
import Table from '../Table';

export default function Body() {
  return !!Object.keys(cards).length && (
    <>
      <Divider />
      <Table minimal>
        <TableHead>
          <TableRow>
            <TableCell>Notation</TableCell>
            <TableCell>Card</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(cards).map(([ acronym, card ], index) => (
            <TableRow key={index}>
              <TableCell>{acronym}</TableCell>
              <TableCell>{card[0]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
