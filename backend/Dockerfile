FROM public.ecr.aws/lambda/nodejs:20 AS base
WORKDIR /var/task
COPY package*.json ./
RUN npm install --production
COPY . .
CMD ["index.handler"]
