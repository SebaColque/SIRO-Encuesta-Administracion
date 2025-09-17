// /api/proxy.js
export default async function handler(req, res) {
  const POWER_AUTOMATE_URL = "https://defaulte50a768fa1f54782902f745f77d641.64.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ae29634cb8fd42b5a8b85fbce5f853bc/triggers/manual/paths/invoke?api-version=1"; // tu URL de Power Automate

  try {
    const response = await fetch(POWER_AUTOMATE_URL);
    const data = await response.json();

    // Configuración CORS para tu web
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.status(200).json(data);

  } catch (error) {
    console.error("Error en proxy:", error);
    res.status(500).json({ error: "Error en proxy", details: error.message });
  }
}
