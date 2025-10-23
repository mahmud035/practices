# Essential Docker Commands You'll Use Daily:

# Images
docker images                    # List images
docker pull <imageName>          # Download an image
docker rmi <imageIDs>            # Remove one or more images
docker image prune               # Remove dangling images
docker image prune -a            # Remove all unused images
docker build -t <imageName>:<tag> pathToDockerfile		# Build an image from a Dockerfile

# Container life-cycle
docker ps                        # Show running containers
docker ps -a                     # Show all containers
docker stop <containerName>      # Graceful stop
docker start <containerName>     # Start stopped container
docker restart <containerName>   # Restart
docker rm <containerName>        # Remove (must be stopped first)
docker rm -f <containerName>     # Force remove
docker run -d -p 5000:5000 --rm --name containerName image:tag    # Create and run a new container from an image

# Here,
-d  --detach		Run container in background and print container ID
-p  --publish   Publish a containers port(s) to the host
    --rm        Automatically remove the container and its associated anonymous volumes when it exits
    --name 			Assign a name to the container
-v, --volume    Bind mount a volume
    --mount     Attach a filesystem mount to the container

# Volumes and Bind Mounts
docker volume create <volumeName>	# Create a volume
docker volume ls									# List volumes
docker volume rm <volumeName>			# Remove a Volume
docker run -v /host/path:/container/path image:tag	# Start a container with a volume from an image
docker run --mount type=bind, source=/host/path, target=/container/path image:tag		# Start a container with a bind mount from an image

# Full example: More verbose but clearer, especially in complex setups.
docker run -d \
  -p 5000:5000 --rm \
  --name dev-mount-syntax \
  --mount type=bind,source="$(pwd)",target=/app \
  --mount type=volume,target=/app/node_modules \
  bind-demo:dev

# Logs and debugging
docker logs <container>          	# View logs
docker logs -f <container>       	# Follow Logs (like tail -f)
docker exec -it <container> sh   	# Shell into container
docker inspect <container>       	# Detailed info

# Cleanup
docker system prune              	# Remove unused data
docker system prune -a           	# Remove EVERYTHING unused
docker volume prune             	# Remove unused volumes

# System-wide Docker disk usage
docker system df

# Detailed breakdown
docker system df -v
