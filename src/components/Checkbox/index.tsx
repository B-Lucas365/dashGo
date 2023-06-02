import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";

export const CheckboxComponent = () => {
  return (
    <div>
      <Checkbox
        defaultChecked
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
      />
    </div>
  );
};
