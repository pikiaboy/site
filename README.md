# React Website

This is repo contains a docker file that is set up to run with my configuration of Traefik.

All you need to run is `docker-compose up -d` and Traefik should automatically pick up the image, provided that your Traefik container is running on the `web` network.

# Technologies Used

## Docker Images

| Image Name | Version             |
| ---------- | ------------------- |
| nginx      | nginx:1.16.0-alpine |
| node       | node:15-alpine      |

## Web Technologies

| Package Name | Version |
| ------------ | ------- |
| React        | 17.0.1  |
| Webpack      | v5\*    |

Webpack v5 currently relies on a lot of third party libraries in order to function properly. I'll be keeping an eye on them and will update to use a non-beta version once one releases.

html-webpack-plugin => 5.0.0-alpha.15

webpack-dev-server => 4.0.0-beta.0
