const express = require('express');
const app = express();
app.use(express.json());
app.use(require('cors')());
let CLIENTS = [];
app.get('/', (req,res) => {
res.send(`<div style="font-family:sans-serif;max-width:500px;margin:30px auto;padding:20px;border:1px solid #ddd;border-radius:12px"><h2>🚀 Skool Bot LIVE</h2><p>Clients: ${CLIENTS.length}</p><input id="name" placeholder="Client Name" style="width:100%;padding:10px;margin:5px 0"><br><input id="api" placeholder="Skool API Key" style="width:100%;padding:10px;margin:5px 0"><br><input id="comm" placeholder="Community ID" style="width:100%;padding:10px;margin:5px 0"><br><textarea id="msg" style="width:100%;height:80px;padding:10px">Hey {name}! Welcome! 👋</textarea><br><button onclick="add()" style="width:100%;padding:12px;background:#ff3b1f;color:#fff;border:none;border-radius:8px">Activate Bot</button><p id="s"></p></div><script>async function add(){let d={clientName:document.getElementById('name').value,apiKey:document.getElementById('api').value,communityId:document.getElementById('comm').value,welcomeMsg:document.getElementById('msg').value};let r=await fetch('/add-client',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)});let j=await r.json();document.getElementById('s').innerText=j.message;}</script>`);
});
app.post('/add-client', (req,res) => { CLIENTS.push(req.body); res.json({message: "✅ Bot Activated"}); });
app.listen(process.env.PORT || 3000, () => console.log("Running"));
