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

export const ImageDetect = ({ setResultData, ...props }) => {

  const [values, setValues] = useState({
    email: '',
    userId: '',
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

    const reqUrl = '/Prod/mydata/'+values.userId;
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
          subheader="요청하실 권리 선택 및 아이디(ID) 그리고 통지 받으실 이메일 주소를 입력하세요."
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
                label="UserId"
                name="userId"
                onChange={handleChange}
                required
                value={values.userId}
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
