import { Box, Button, CIcon, Typography } from "@mui/material";

export const POCListToolbar = ({ ...props }) => {

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
          개인정보 입력 & 조회
        </Typography>
        
      </Box>
    </Box>
  );
};
