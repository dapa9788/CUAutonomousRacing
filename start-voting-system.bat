@echo off
echo 🚀 Starting CU Autonomous Racing Voting System
echo.

echo 📦 Installing backend dependencies...
cd backend
call npm install
if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo 🌐 Starting backend server...
start "Voting API Server" cmd /k "npm start"

echo.
echo ✅ Voting system is starting up!
echo.
echo 📡 Backend API: http://localhost:3001
echo 🌐 API Health Check: http://localhost:3001/api/health
echo 📊 Get Votes: http://localhost:3001/api/votes
echo.
echo 💡 Your frontend should be running separately (probably on port 3000 or 5173)
echo 🌐 Make sure to serve your public/ folder or run your dev server!
echo.
pause