import PerfectScrollbar from "react-perfect-scrollbar";
import moment from "moment";
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

const rights = [ 
  {
    value: 'Portability',
    label: '개인(신용)정보 정정'
  },
  {
    value: 'Erasure',
    label: '개인(신용)정보 삭제'
  },
  {
    value: 'Stop',
    label: '개인(신용)정보 처리정지'
  },
  {
    value: 'Withdraw',
    label: '개인(신용)정보 동의철회'
  }
];

export const SearchResult = ({ loading, resultData, ...props }) => {

  let rightLabel = '';

  if ( resultData.Rights !== '' ) {
    const rightList = rights.filter(right => right.value === resultData.Rights);
    rightLabel = rightList[0].label;
  }

  return (
    <Card {...props}>
      <CardHeader title="Search Result" />
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
                  <TableCell>Email</TableCell>
                  <TableCell>{resultData.Email}</TableCell>  
                </TableRow>
                <TableRow>
                  <TableCell>UserId</TableCell>
                  <TableCell>{resultData.UserId}</TableCell>  
                </TableRow>
                <TableRow>
                  <TableCell>RegId</TableCell>
                  <TableCell>{resultData.RegId}</TableCell>  
                </TableRow>
                <TableRow>
                  <TableCell>Rights</TableCell>
                  <TableCell>{ rightLabel }</TableCell>  
                </TableRow>
                <TableRow>
                  <TableCell>Requested</TableCell>
                  <TableCell>{resultData.Requested && moment(resultData.Requested).format('YYYY년 MM월 DD일 HH시 mm분 ss초')}</TableCell>   
                </TableRow>
                
                
              
            </TableBody>
          </Table>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ServiceId</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Updated</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {resultData.Tasks.map((task) => (

              <TableRow key={task.ServiceId}>
                <TableCell>{task.ServiceId}</TableCell>  
                <TableCell>{task.Status}</TableCell>
                <TableCell>{moment(task.Updated).format('YYYY년 MM월 DD일 HH시 mm분 ss초')}</TableCell>   
              </TableRow>
                  
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};
