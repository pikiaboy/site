# Stage: 1
FROM node:15-alpine as builder
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build
RUN ls

# Stage: 2 Prod build
FROM nginx:1.16.0-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

