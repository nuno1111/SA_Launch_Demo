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

export const ImageDetect = ({ setResultData, ...props }) => {

  const [values, setValues] = useState({
    email: 'dhoon@amazon.com',
    rights: 'Portability'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  // 이미지파일 선택
  function onSave() { 
    // alert(values.email + ' : ' +values.rights);
    // if (e.target.files) {
    //   const reqUrl = "/api/upload"; 

    //   const uploadFile = e.target.files[0];
    //   const formData = new FormData();
    //   formData.append("file", uploadFile);

    //   // 서비스신청 정보 서버통신
    //   setLoading(true);

    const reqUrl = '/Prod/mydata/blkiocjkakld';
    const params = JSON.stringify({
      "email": values.email,       
      "rights": values.rights,
    });

    axios
      .post(reqUrl, params, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        alert('Save Success');
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
          subheader="데이터 입력 후 Save 버튼을 누르세요!"
          title="Profile"
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
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
          
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select Rights"
                name="rights"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.rights}
                variant="outlined"
              >
                {rights.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
              
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
            onClick={onSave}
          >
            Save 
          </Button>
        </Box>
    </Card>
  );
};
