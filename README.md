# social
some sort of social media

for base arch docker image
`
#!/bin/bash
sudo yum update -y;
sudo yum install docker -y;
sudo systemctl enable --now docker;
sudo docker run --name social --cap-add SYS_ADMIN -d -it macedigital/docker-arch-systemd;
docker exec -it social /bin/bash
`
