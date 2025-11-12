export async function GET() {
  return Response.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "Jaetravel Expeditions",
    version: "1.0.0",
  })
}
