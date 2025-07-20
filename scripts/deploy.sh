#!/bin/bash
# Deployment script using AWS SAM CLI
set -e
cd ../backend
sam build
sam deploy --guided
