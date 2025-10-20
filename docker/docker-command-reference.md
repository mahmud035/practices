# Essential Docker Commands You'll Use Daily:

# Container lifecycle
docker ps                    # Running containers
docker ps -a                 # All containers
docker stop <container>      # Graceful stop
docker start <container>     # Start stopped container
docker restart <container>   # Restart
docker rm <container>        # Remove (must be stopped first)
docker rm -f <container>     # Force remove

# Images
docker images                # List images
docker pull <image>          # Download image
docker rmi <image>           # Remove image
docker build -t myapp .      # Build from Dockerfile

# Logs and debugging
docker logs <container>      # View logs
docker logs -f <container>   # Follow logs (like tail -f)
docker exec -it <container> sh  # Shell into container
docker inspect <container>   # Detailed info

# Cleanup
docker system prune          # Remove unused data
docker system prune -a       # Remove EVERYTHING unused
docker volume prune          # Remove unused volumes

# System-wide Docker disk usage
docker system df

# Detailed breakdown
docker system df -v

