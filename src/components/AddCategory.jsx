import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, InputAdornment } from "@mui/material";

export const AddCategory = (props) => {
  const { onNewCategory, onRefresh } = props;

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    //setCategories(categories => [inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Box>
          <TextField
            value={inputValue}
            onChange={onInputChange}
            label="Buscar GIFs"
            type="search"
            color="secondary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="button"
                    aria-label="search"
                    onClick={onSubmit}
                  >
                    <SearchIcon />
                  </IconButton>

                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                    onClick={onRefresh}
                  >
                    <RefreshIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </form>
    </>
  );
};
