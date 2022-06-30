import React, { useState } from "react";

import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";

import { SearhListToolbar } from "../components/search/search-list-toolbar";
import { SearchForm } from "../components/search/search-form";
import { SearchResult } from "../components/search/search-result";

const POC = () => {
  // const [imgUrl, setImgUrl] = useState("/static/images/upload-files.jpg");
  const [resultData, setResultData] = useState({
    "Rights":'',
    "Tasks":[]
  });

  return (
    <>
      <Head>
        <title>SA Launch Demo - Search</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <SearhListToolbar  />
          <Grid container spacing={3}>
            <Grid item lg={6} md={12} xl={6} xs={12}>
              <SearchForm sx={{ height: "100%" }}  setResultData={setResultData}  />
            </Grid>

            <Grid item lg={6} md={12} xl={6} xs={12}>
              <SearchResult resultData={resultData}  />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

POC.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default POC;
