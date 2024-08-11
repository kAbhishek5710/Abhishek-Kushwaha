import React from "react";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

export default function PillBadges({ techs }) {
  const colors = ["primary", "success", "danger", "warning", "info", "dark"];
  return (
    <Stack direction="horizontal" gap={3} className="flex justify-center items-center mx-4 my-12 flex-wrap">
      {techs.map((tech, index) => (
        <Badge pill bg={colors[index % colors.length]} className="text-slate-100 text-sm py-2 px-3">
          {tech}
        </Badge>
      ))}
    </Stack>
  );
}
