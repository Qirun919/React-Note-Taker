import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function HomePage() {
  const [category, setCategory] = useState("");
  const [Sort_By, setSort_By] = useState("");
  return (
    <Container>
      <Box
        style={{ display: "flex", justifyContent: "space-between", margin: 10 }}
      >
        <Typography variant="h3">All Notes</Typography>

        <Box style={{ display: "flex" }}>
          <FormControl fullWidth sx={{ mt: "20px" }}>
            <InputLabel id="note_category_label">Category</InputLabel>
            <Select
              labelId="note_category_label"
              id="note_category"
              label="Category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <MenuItem value={"Personal"}>Personal</MenuItem>
              <MenuItem value={"Work"}>Work</MenuItem>
              <MenuItem value={"Idea"}>Idea</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mt: "20px" }}>
            <InputLabel id="note_Sort_By_label">Sort_By</InputLabel>
            <Select
              labelId="note_Sort_By_label"
              id="note_Sort_By"
              label="Sort_By"
              value={Sort_By}
              onChange={(event) => setSort_By(event.target.value)}
            >
              <MenuItem value={"Last Updated"}>Last Updated</MenuItem>
              <MenuItem value={"Title"}>Title</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Which Theame should we pick?
          </Typography>
          <Typography variant="h5" component="div">
            Ideas
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            Jun 20 2025 6:58pm
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <EditIcon />
            Edit
          </Button>
          <Button size="small">
            <DeleteIcon />
            Delete
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default HomePage;
