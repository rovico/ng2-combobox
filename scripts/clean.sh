#!/bin/bash

find . -type f -name "*.js" ! -path "./demo/*" ! -path "./node_modules/*" -delete
find . -type f -name "*.js.map" ! -path "./demo/*" ! -path "./node_modules/*" -delete
find . -type f -name "*.d.ts" ! -path "./demo/*" ! -path "./node_modules/*" -delete
