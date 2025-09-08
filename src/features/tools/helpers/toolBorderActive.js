export const toolBorderActive = (isActive) => ({
  boxShadow: isActive ? "2px 2px 8px 0px var(--bg-tool-border)" : "none",
  transition: "0.3s ease",
});
