rm -rf ./web/static
yarn --cwd ./minerva-referral build
yarn --cwd ./minerva-referral-login build

docker build -t minerva-referral:latest .