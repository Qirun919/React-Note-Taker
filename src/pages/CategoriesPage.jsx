import {
  Container,
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  InputLabel,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Edit, Delete } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

function CategoriesPage() {
  return (
    <>
      <Container sx={{ py: 6 }}>
        <Typography variant="h4">Manage Categories</Typography>
        <Paper
          elevation={3}
          sx={{
            p: "20px",
            mt: "20px",
          }}
        >
          <InputLabel>Add New Category</InputLabel>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              mt: "5px",
            }}
          >
            <TextField
              fullWidth
              label="Category"
              variant="outlined"
              // value={title}
              // onChange={(event) => setTitle(event.target.value)}
            />
            <Button color="primary" variant="contained">
              Add
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            p: "20px",
            mt: "20px",
          }}
        >
          <InputLabel>Existing Categories (3)</InputLabel>
          <List sx={{ width: "100%" }}>
            {["Personal", "Work", "Idea"].map((value) => (
              <ListItem
                key={value}
                disableGutters
                divider
                secondaryAction={
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <IconButton>
                      <Edit />
                    </IconButton>
                    <IconButton disabled>
                      <Delete />
                    </IconButton>
                  </Box>
                }
              >
                <ListItemText primary={`${value}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </>
  );
}

export default CategoriesPage;
