import tableData from '@/data/tableData'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

function RankingTable() {
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
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                sx={{
                  color: 'text.secondary',
                  textAlign: 'center',
                  py: 1,
                }}
              >
                {row.id}
              </TableCell>
              <TableCell
                sx={{ py: 1, color: 'text.secondary', textAlign: 'left' }}
              >
                {row.first_name}
              </TableCell>
              <TableCell
                sx={{ py: 1, color: 'text.secondary', textAlign: 'end' }}
              >
                {row.last_name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default RankingTable
