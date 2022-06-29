import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader, 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { SeverityPill } from "../severity-pill";

export const ImageAnalysis = ({ loading, resultData, ...props }) => {
  return (
    <Card {...props}>
      <CardHeader title="Profile Result" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 400 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Key</TableCell>
                <TableCell>Value</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
              
                <TableRow>
                  <TableCell>DocumentId</TableCell>
                  <TableCell>{resultData.documentId}</TableCell>  
                </TableRow>

                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>{resultData.email}</TableCell>  
                </TableRow>

                <TableRow>
                  <TableCell>RegId</TableCell>
                  <TableCell>{resultData.regId}</TableCell>  
                </TableRow>

                <TableRow>
                  <TableCell>UserId</TableCell>
                  <TableCell>{resultData.userId}</TableCell>  
                </TableRow>
                
              
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};
