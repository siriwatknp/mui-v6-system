"use client";
import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { DataGridPremium as DataGrid } from "@mui/x-data-grid-premium";
import { useDemoData } from "@mui/x-data-grid-generator";
import { SxProps, Theme } from "@mui/material";

class Cell extends React.Component<any, any> {
  render() {
    const Element = this.props.element;
    if (Element === "input" || Element === TextField)
      return <Element defaultValue={String(this.props.initialValue)} />;
    return <Element>{String(this.props.initialValue)}</Element>;
  }
}

const sx: SxProps<Theme> = {
  height: "100lvh",
  width: "100%",
  "&&& .updating": (theme) => ({
    background: teal[theme.palette.mode === "dark" ? 900 : 100],
    transition: theme.transitions.create("background", {
      duration: theme.transitions.duration.standard,
    }),
  }),
};

export default function GridWithReactMemo() {
  const [element, setElement] = React.useState("button" as any);
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100_000,
  });

  const columns = React.useMemo(() => {
    return data.columns.map((c) => ({
      ...c,
      renderCell: (params: any) => {
        return (
          <Cell
            element={element}
            initialValue={String(params.value)}
            attribute={c.field}
          />
        );
      },
    }));
  }, [element, data.columns]);

  return (
    <Box>
      <Typography variant="caption" sx={{ ml: 1, mt: 1, display: "block" }}>
        Click one of the buttons below to render the component, then scroll the
        data grid to see the runtime performance.
      </Typography>
      <Box sx={{ my: 1 }}>
        <Button onClick={() => setElement("button")}>button (native)</Button>
        <Button onClick={() => setElement(Button)}>Button (MUI)</Button>
        <Button onClick={() => setElement("input")}>input (native)</Button>
        <Button onClick={() => setElement(TextField)}>TextField (MUI)</Button>
      </Box>
      <Box sx={sx}>
        <DataGrid
          {...data}
          columns={columns}
          hideFooter={true}
          checkboxSelection
          density="compact"
        />
      </Box>
    </Box>
  );
}
