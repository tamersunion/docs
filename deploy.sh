#!/bin/bash

yarn install
yarn docs:build
vuepress build docs
