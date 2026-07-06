#!/bin/sh
set -eu

cd "$(dirname "$0")/../backend"
uvicorn app.main:app --reload

