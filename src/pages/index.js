import React, { useState } from "react";

import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";

import { POCListToolbar } from "../components/poc/poc-list-toolbar";

import { ImageDetect } from "../components/poc/image-detect";
import { ImageAnalysis } from "../components/poc/image-analysis";

const POC = () => {
  // const [imgUrl, setImgUrl] = useState("/static/images/upload-files.jpg");
  const [resultData, setResultData] = useState({});

  return (
    <>
      <Head>
        <title>SA Launch Demo</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <POCListToolbar  />
          <Grid container spacing={3}>
            <Grid item lg={6} md={12} xl={6} xs={12}>
              <ImageDetect sx={{ height: "100%" }}  setResultData={setResultData}  />
            </Grid>

            <Grid item lg={6} md={12} xl={6} xs={12}>
              <ImageAnalysis resultData={resultData}  />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

POC.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default POC;
