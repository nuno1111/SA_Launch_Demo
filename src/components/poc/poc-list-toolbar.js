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
          요구 권리 및 정보 입력
        </Typography>
        
      </Box>
    </Box>
  );
};
