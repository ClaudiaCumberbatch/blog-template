---
title: 'Function Compression and Warmup'
description: >-
  Paper reading notes of CodeCrunch: Improving Serverless Performance via Function Compression and Cost-Aware Warmup Location Optimization.
pubDate: 2025-02-26T22:00:00.000Z
heroImage: ../../assets/images/paper.png
category: Paper Reading Notes
tags:
  - Paper Notes
  - Scheduling
---

[CodeCrunch: Improving Serverless Performance via Function Compression and Cost-Aware Warmup Location Optimization.](https://dl.acm.org/doi/pdf/10.1145/3617232.3624866)

Code**Crunch** is not Code**Church**.

This paper is written by my potential advisor.

## Introduction

Background: In serverless computing, the instance should download and install everything about the function. This is cold start time. We can have warm start, but it will have keep-alive cost.

Challenges:

1. During high function invocation load, the fraction of warm starts will drop due to high memory pressure. (why does high memory pressure decrease the warm start percentage?)
2. There are performance and keep-alive cost trade-offs. (why?)

Solutions:

1. In-memory compression.
2. Compare the performance and keep-alive cost of heterogeneous machines.
