export default defineEventHandler((event) => {
  return sendRedirect(event, "/_docs/scalar");
});
