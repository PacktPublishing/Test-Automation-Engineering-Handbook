#!/bin/bash
mkdir test_folder
cd test_folder
touch test_file.txt
curl $1  -o test_file.txt
file_content=`more test_file.txt`
echo $file_content
rm test_file.txt

