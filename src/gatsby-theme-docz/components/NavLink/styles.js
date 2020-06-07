export const link = {
  my: 2,
  display: "block",
  color: "text",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: 2,
  "&.active": {
    color: "primary",
  },
}

export const smallLink = {
  ...link,
  ml: 3,
  fontSize: 1,
  position: "relative",
  color: "text",
  "&.active": {
    color: "primary",
  },
  "&.active::before": {
    content: '""',
    position: "absolute",
    display: "block",
    top: "2px",
    left: -2,
    height: "1rem",
    backgroundColor: "primary",
    transition: "width 200ms ease 0s",
    width: "2px",
    borderRadius: 1,
  },
}
