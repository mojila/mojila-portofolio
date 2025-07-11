#!/bin/bash

# Docker build script for Mojila Portfolio

echo "Building Mojila Portfolio Docker image..."

# Build the Docker image
docker build -t mojila-portfolio .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    echo ""
    echo "To run the container on port 80:"
    echo "  docker run -d -p 80:80 --name mojila-portfolio mojila-portfolio"
    echo ""
    echo "Or use docker-compose:"
    echo "  docker-compose up -d"
    echo ""
    echo "To stop the container:"
    echo "  docker stop mojila-portfolio"
    echo "  docker rm mojila-portfolio"
    echo ""
    echo "Or with docker-compose:"
    echo "  docker-compose down"
else
    echo "❌ Docker build failed!"
    exit 1
fi