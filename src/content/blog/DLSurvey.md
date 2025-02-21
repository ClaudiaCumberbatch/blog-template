---
title: 'DL Scheduling Survey'
description: >-
  Paper reading notes of Deep Learning Workload Scheduling in GPU Datacenters: A Survey.
pubDate: 2025-02-11T22:00:00.000Z
heroImage: ../../assets/images/paper.png
category: Paper Reading Notes
tags:
  - Paper Notes
  - Deep Learning
  - Scheduling
---

[Deep Learning Workload Scheduling in GPU Datacenters: A Survey](https://dl.acm.org/doi/pdf/10.1145/3638757)

## Introduction

This survey tries to answer the following questions. (This structure is classic: challenges + existing solutions + new solutions.)

(1) What are the main **challenges** for designing a satisfactory scheduler to manage DL workloads and resources?
(2) Do **existing solutions** share common strategies to achieve their scheduling objectives?
(3) How do we need to **refine** the schedulers to adapt to the rapid development of DL technology?

## Challenges

Training:

1. It is challenging to allocate resources to jobs. Different resources includes the generations of GPUs and ways of communication.
2. The overhead of pause/resume training jobs increases with model scale.

Inference:

1. The requests are unpredictable. Sometimes low GPU utilization, sometimes overloading but still need to guarantee the latency.
2. Tradeoff between latency, accuracy, and cost.

## Existing Solutions

### Training

Based on scheduling objectives:

1. Efficiency: timing efficiency and cost efficiency
2. Fairness: homogeneous and heterogeneous GPU resources
3. Deadline Guarantee

Based on resource utilization manner:

1. Heterogeneous Resources
2. GPU Sharing
3. Elastic Training: resource elasticity and batch elasticity

### Inference

Based on scheduling objectives:

1. Efficiency: accuracy efficiency, latency efficiency, and cost-efficiency
2. System Throughput: batching execution, caching & reusing, and system configuration tuning

Based on resource utilization manner:

1. Colocation and Resource Sharing
2. Heterogeneous Resources
