import topScorePlayers from '@/data/topScorePlayers'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React from 'react'

function TopBowlerTable() {
  return (
    <TableContainer>
      <Table sx={{ borderCollapse: 'separate' }}>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: '#E8E9EE',
            }}
          >
            <TableCell
              sx={{
                px: 2,
                py: 0.4,
                color: 'text.secondary',
                textAlign: 'center',
                fontWeight: 500,
              }}
            >
              Rank
            </TableCell>
            <TableCell
              sx={{
                px: 2,
                py: 0.4,
                color: 'text.secondary',
                textAlign: 'left',
                fontWeight: 500,
              }}
            >
              Team
            </TableCell>
            <TableCell
              sx={{
                px: 2,
                py: 0.4,
                color: 'text.secondary',
                textAlign: 'end',
                fontWeight: 500,
              }}
            >
              Rating
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topScorePlayers.map((row, id) => (
            <TableRow key={id + 1}>
              <TableCell
                sx={{
                  color: 'text.secondary',
                  textAlign: 'center',
                  py: 1,
                }}
              >
                {id + 1}
              </TableCell>
              <TableCell
                sx={{ py: 1, color: 'text.secondary', textAlign: 'left' }}
              >
                {row.name}
              </TableCell>
              <TableCell
                sx={{ py: 1, color: 'text.secondary', textAlign: 'end' }}
              >
                {row.score}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TopBowlerTable
