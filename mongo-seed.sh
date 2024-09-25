#!/bin/bash

for file in /seeds/*; do
  fullfile=$(basename "$file")
  filename="${fullfile%.*}"
  echo "---- Importing seed for $filename collection..."
  mongoimport --db=$MONGO_INITDB_DATABASE --collection=$filename --file="/seeds/$filename.json" --jsonArray --username=$MONGO_INITDB_USERNAME --password=$MONGO_INITDB_PASSWORD --authenticationDatabase=$MONGO_INITDB_DATABASE  
done



