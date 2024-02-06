export async function GET(request: Request): Promise<Response> {
  const str = "loaderio-27e89dbc7e2acfdc6caff27596fdbcef";
  const blob = new Blob([str], { type: "text/plain" });
  console.log(blob);
  // return new response as a file to download
  return new Response(blob, {
    headers: {
      "content-type": "text/plain",
      "content-disposition": 'attachment; filename="loaderio-27e89dbc7e2acfdc6caff27596fdbcef"',
    },
  });
}