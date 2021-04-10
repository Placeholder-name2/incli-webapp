FROM node:13.7
COPY . /
EXPOSE 3000
CMD [ "npm", "start" ]


# FROM node:stable

# WORKDIR /app
# ADD . /app

# EXPOSE 8000

# # Switching to a non-root user, please refer to https://aka.ms/vscode-docker-python-user-rights
# RUN useradd appuser && chown -R appuser /app
# USER appuser

# CMD ["npm", "start"]