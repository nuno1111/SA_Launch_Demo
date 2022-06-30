import { Box, Button, CIcon, Typography } from "@mui/material";

export const SearhListToolbar = ({ ...props }) => {

  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          개인정보 조회
        </Typography>
        
      </Box>
    </Box>
  );
};
