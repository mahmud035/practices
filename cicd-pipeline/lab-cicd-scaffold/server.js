'use strict';

const express = require('express');

const app = express();

// Bind to all interfaces so the container is reachable from outside it.
// (Binding to 127.0.0.1 is the classic "works on host, dead in Docker" trap.)
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 3000;

// ⬇️ LOAD-BEARING for Batch 4. This is the string you'll change, push, and
// watch deploy itself end-to-end. Editable via env (APP_VERSION) or this const.
const VERSION = process.env.APP_VERSION || 'v5';

app.get('/', (req, res) => {
  res.json({
    service: 'lab-cicd-scaffold',
    version: VERSION,
    message: 'push-to-deploy loop, learned cold',
    timestamp: new Date().toISOString(),
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, HOST, () => {
  console.log(
    `lab-cicd-scaffold ${VERSION} listening on http://${HOST}:${PORT}`,
  );
});
