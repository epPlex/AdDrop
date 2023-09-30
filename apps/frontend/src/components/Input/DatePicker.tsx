// Taken from here https://stackoverflow.com/questions/76767152/i-am-using-react-mui-mui-x-date-pickers-please-tell-me-how-to-change-color-of
import React from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";

export function MyDatePicker({width}) {
    const [date, setDate] = React.useState<Dayjs | null>(
        dayjs(new Date()),
    );

    const handleChange = (newValue: Dayjs | null) => {
        setDate(newValue);
    };

    const dateComponent = <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            value={date}
            InputProps={{
                sx: {
                    "& .MuiIconButton-root": {
                        color: "text.primary"
                    },
                    "&. MuiInputLabel-root": {
                        color: "text.primary"
                    }
                }
            }}
            onChange={handleChange}
            renderInput={(params) =>
                <TextField
                    {...params}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'text.primary',
                            },
                            '&:hover fieldset': {
                                borderColor:'text.primary',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'text.primary',
                            },
                        },
                        "&. MuiInputLabel-root": {
                            color: "text.primary"
                        },
                        "&. MuiFormLabel-root": {
                            color: "text.primary"
                        },
                        width: width
                    }}
                    InputLabelProps={{
                        sx: {
                            color: "text.primary",
                            "&.Mui-focused": {
                                color: "text.primary"
                            }
                        }
                    }}
                />
            }
            label="Date"
            PaperProps={{
                sx: {
                    color: "text.secondary",
                    "& .MuiPickersDay-root": {
                        color: "text.secondary",
                        "&.Mui-selected": {
                            color: "text.primary",
                        },
                    }
                }
            }}
        />
    </LocalizationProvider>;

    return ({dateComponent, date });
}
