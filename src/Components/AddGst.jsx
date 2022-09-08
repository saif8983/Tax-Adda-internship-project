import React from "react";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import Popover from "@mui/material/Popover";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [];
const AddGst = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="start"
          spacing={1}
        >
          <div style={{ marginTop: "-300px" }}>
            <Typography variant="h5" gutterBottom>
              Add Client
            </Typography>
            <Typography variant="body2" gutterBottom>
              Enter the GST number of the client<br></br>
              You can add GST number which have GST<br></br>
              type as Regular or Composition.
            </Typography>
          </div>
          <div>
            <Typography variant="h5" gutterBottom>
              Here are your plan details: -
            </Typography>
            <Typography variant="body1" gutterBottom>
              {" "}
              <b>
                Available GSTIN credits - 478<br></br>
                Expiry Date - 07/11/2022
              </b>
            </Typography>
          </div>
        </Stack>

        <Box
          sx={{
            width: 550,
            height: 600,
            backgroundColor: "white",
          }}
          style={{
            marginTop: "20px",
          }}
        >
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="start"
            spacing={2}
            sx={{ padding: "24px" }}
          >
            <div>
              <Typography>
                <b>Enter one or more GSTIN to import</b>
              </Typography>
              <TextField sx={{ width: "80vh" }} multiline rows={10} />
            </div>
            <div>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Typography>
                  <b>Select Tags</b>
                </Typography>
                <Button
                  aria-describedby={id}
                  variant="contained"
                  sx={{ textTransform: "none" }}
                  onClick={handleClick}
                >
                  Add Tags
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 550,
                      height: 300,
                      backgroundColor: "white",
                    }}
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    <Stack
                      direction="column"
                      justifyContent="space-around"
                      alignItems="start"
                      spacing={2}
                      sx={{ padding: "15px" }}
                    >
                      <div>
                        <Typography>
                          <b>Tag</b>
                        </Typography>
                        <TextField sx={{ width: "450px" }} />
                      </div>
                      <Typography>
                        <b>Discription</b>
                      </Typography>

                      <div>
                        <TextField sx={{ width: "500px" }} multiline rows={2} />
                      </div>
                      <div>
                        <Button variant="contained">Save Tag</Button>
                      </div>
                    </Stack>
                  </Box>
                </Popover>
              </Stack>
              <FormControl sx={{ m: 1, width: 500 }}>
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <Typography>
                Paste all the client GSTIN in the box which you like to import.{" "}
                <br></br>
                Each GSTIN should be in new line.
              </Typography>
            </div>
            <div>
              <Typography>
                QRMP preference along with GST return status from Jan 2021 till
                date<br></br>
                will be imported automatically.
              </Typography>
            </div>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default AddGst;
