#!/bin/bash

echo "🚀 Starting CU Autonomous Racing Voting System"
echo ""

echo "📦 Installing backend dependencies..."
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🌐 Starting backend server..."
npm start &

echo ""
echo "✅ Voting system is starting up!"
echo ""
echo "📡 Backend API: http://localhost:3001"
echo "🌐 API Health Check: http://localhost:3001/api/health"
echo "📊 Get Votes: http://localhost:3001/api/votes"
echo ""
echo "💡 Make sure your frontend is also running to see the voting interface!"
echo ""
echo "Press Ctrl+C to stop the server"
wait