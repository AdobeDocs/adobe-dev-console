#!/bin/bash

home="https://admin.hlx.page/preview/adobedocs/adp-devsite-stage/main"
root=$1
path_prefix=$2

publish()
{
    filename=$1
    to_remove="$root/"
    relative_filename=${filename/#$to_remove}
    url="${home}${path_prefix}${relative_filename}"

    echo ""
    echo "curl -XPOST -vi --header \"x-content-source-authorization: stage\" ${url}"
    curl -XPOST -vi --header "x-content-source-authorization: stage" "${url}"
}

# TODO: may want to only certain types of files up 
find "${root}" -type f \( -name "*.md" -o -name "*.json" \) -exec echo "{}" \; | while read i; do publish $i; done
