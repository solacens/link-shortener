#!/bin/bash

cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1

docker build -t solacens/link-shortener:latest .

docker push solacens/link-shortener:latest