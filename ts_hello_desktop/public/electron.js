const { app, BrowserWindow } = await import("electron");
const path = await import("path");
const isDev = (await import("electron-is-dev")).default;

let mainWindow;
const __dirname = path.resolve();

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      devTools: isDev,
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    const render_path = path.join(__dirname, "./build/index.html");
    const render_url = `file://${render_path}`;
    console.log(__dirname);
    console.log(render_path);
    console.log(render_url);
    mainWindow.loadURL(render_url);
  }

  if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" });

  mainWindow.setResizable(true);
  mainWindow.on("closed", () => {
    mainWindow = null;
    app.quit();
  });
  mainWindow.focus();
}

app.on("ready", createWindow);

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
