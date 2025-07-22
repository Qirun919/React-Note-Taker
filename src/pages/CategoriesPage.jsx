import { Box, Paper, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";

function CategoriesPage() {
  return (
    <Container>
      <Typography variant="h3">Manage Categories </Typography>
      <Paper
        style={{ display: "flex", justifyContent: "space-between", margin: 10 }}
      >
        <Typography variant="h5">
          Add New Category
          <TextField
            fullWidth
            id="outlined-basic"
            label="Category Name"
            variant="outlined"
            style={{ margin: 10 }}
          ></TextField>
        </Typography>
        <Button variant="contained">Add</Button>
      </Paper>
      <Paper>
        <Typography variant="h5">Existing Categories </Typography>
        <Paper
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Typography variant="h6">personal </Typography>
          <Box>
            <EditIcon />
            <DeleteIcon />
          </Box>
        </Paper>
        <Paper
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Typography variant="h6">work </Typography>{" "}
          <Box>
            <EditIcon />
            <DeleteIcon />
          </Box>
        </Paper>
        <Paper
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Typography variant="h6">ideas </Typography>{" "}
          <Box>
            <EditIcon />
            <DeleteIcon />
          </Box>
        </Paper>
      </Paper>
    </Container>
  );
}

export default CategoriesPage;
