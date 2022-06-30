import Image from "next/image";
import { useState } from 'react';
import axios from "axios";

import {
  Box,
  Button, 
  Card,
  CardContent,
  CardHeader,
  Divider,
  CircularProgress,
  LinearProgress,
  Grid,
  TextField
} from "@mui/material";

const rights = [ 
  {
    value: 'Portability',
    label: 'Portability'
  },
  {
    value: 'Erasure',
    label: 'Erasure'
  }
];

export const SearchForm = ({ setResultData, ...props }) => {

  const [values, setValues] = useState({
    regId: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  // 이미지파일 선택
  function onSearch() { 
    
    const reqUrl = '/Prod/qldb/q?regId=';

    axios
      .get(reqUrl + values.regId , {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        alert('Search Success');
        console.log("Response >>", response);
        setResultData(response.data);
      })
      .catch((error) => {
        // setLoading(false);
        alert(error);
        console.log("Error >>", error);
      });
    // }
  }

  return (
    <Card {...props}>
      <CardHeader
          subheader="조회할 RegId 입력 후 Search 버튼을 누르세요!"
          title="Search Form"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Register ID"
                name="regId"
                onChange={handleChange}
                required
                value={values.regId}
                variant="outlined"
              />
            </Grid>
          
            
            
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={onSearch}
          >
            Search 
          </Button>
        </Box>
    </Card>
  );
};
