#!/bin/sh
SOURCE="./dist/*"
USER="web05025"
SERVER="web05.microsites.redbull.com"
FOLDER="/stage/test"

# rsync -avz --password-file=./rsync_pass "$SOURCE" "$USER@$SERVER":"$FOLDER"
rsync -avz --password-file=./rsync_pass ./dist/* web05025@web05.microsites.redbull.com:/stage/test
