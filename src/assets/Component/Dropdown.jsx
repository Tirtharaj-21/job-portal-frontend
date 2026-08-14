import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
const Dropdown = ({
  label,
  id,
  value,
  handleChange,
  name,
  options,
  multiple = false,
}) => {
  return (
    <FormControl>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}
        label={label}
        onChange={handleChange}
        name={name}
        multiple={multiple}
        renderValue={multiple ? (selected) => selected.join(", ") : undefined}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default Dropdown;
