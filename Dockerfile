FROM node
WORKDIR frontend/dir
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm", "start"]