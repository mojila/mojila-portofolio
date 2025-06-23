# Mojila Portfolio Website

A modern, interactive portfolio website for AI/ML Engineer & Backend Developer.

## Features

- Responsive design with modern animations
- Interactive hover effects and smooth transitions
- Downloadable resume functionality
- Clean, professional layout

## Running with Docker

### Build the Docker image
```bash
docker build -t mojila-portfolio .
```

### Run the container
```bash
docker run -d -p 8080:80 --name portfolio mojila-portfolio
```

### Access the website
Open your browser and navigate to: `http://localhost:8080`

### Stop the container
```bash
docker stop portfolio
docker rm portfolio
```

## Development

For local development without Docker:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`

## Project Structure

```
├── index.html          # Main HTML file
├── style.css           # Stylesheet with animations
├── assets/
│   └── Resume - Aji Laksono.pdf  # Downloadable resume
├── Dockerfile          # Docker configuration
├── .dockerignore       # Docker ignore file
└── README.md           # This file
```