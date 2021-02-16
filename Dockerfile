FROM python:3.8-slim

RUN apt update && apt install -y curl unzip jq

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install

RUN mkdir /data
COPY lambda-script.sh .

ENTRYPOINT ["./lambda-script.sh"]
