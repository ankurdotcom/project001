# Tiltfile for Flexible Service Bidder
# Run with: tilt up

# Docker Compose integration
docker_compose('docker-compose.yml')

# Optionally, you can add custom resources, live updates, or health checks here.
# For example, to show logs for frontend and backend:

k8s_resource('frontend', port_forwards=3000)
k8s_resource('backend', port_forwards=3001)

# To see logs for LocalStack (optional):
# k8s_resource('localstack', port_forwards=4566)

# To auto-reload on code changes, uncomment and adjust as needed:
# config.define_string_list('watch', ['frontend', 'backend'])
# for svc in config.get('watch'):
#     watch(svc)

print('Tilt is set up! Run `tilt up` to start the stack.')
