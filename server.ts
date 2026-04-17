import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for License Generation
  app.post("/api/generate-license", (req, res) => {
    const { companyName, contactName, phone, email, users } = req.body;
    
    // Auto-generate a dummy license key format: VT-MCP-XXXX-XXXX-XXXX
    const randomBlock = () => Math.random().toString(36).substring(2, 6).toUpperCase();
    const licenseKey = `VT-MCP-${randomBlock()}-${randomBlock()}-${randomBlock()}`;

    // Simulate backend processing delay
    setTimeout(() => {
      res.json({
        success: true,
        licenseKey,
        message: `License generated successfully for ${companyName || 'the company'}.`
      });
    }, 800);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
