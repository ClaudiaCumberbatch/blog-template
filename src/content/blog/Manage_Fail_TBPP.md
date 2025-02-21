---
title: 'Manage Failures in TBPP'
description: >-
  Paper reading notes of Managing Failures in Task-Based Parallel Workflows in Distributed Computing Environments.
pubDate: 2025-02-21T22:00:00.000Z
heroImage: ../../assets/images/paper.png
category: Paper Reading Notes
tags:
  - Paper Notes
  - Resilient
---

[Managing Failures in Task-Based Parallel Workflows in Distributed Computing Environments](https://link.springer.com/chapter/10.1007/978-3-030-57675-2_26)

This paper is recommended by my paper reviewer.

## Introduction

The scale of scientific workflows is growing rapidly. So there are a lot of failures.

Current workflow managers only focus on resource failures. So the users should implement custom failure handling mechanisms. This will make the workflows to be more complex and slow.

This paper proposes a simple user interface to allow developers to indicate how to manage their application failures.

## Methodology

Workflow failures classification:

- Tasks stop execution before completion.
- Tasks blocked or lasting more than expected.
- Tasks throwing exceptions.

Failure management:

- User can specify how to react to failure.
- Automatic cancellation after timeout. User can specify the time threshold.
- Parallel distributed exception. It allows developers to create “try/catch” blocks in distributed environments. (Don't quite understand this. Sounds like managing task dependencies. But isn't this implemented in the original TBPP framework?)

## Experiments

Two workflows, Model Protein Mutants Workflow and Machine Learning Algorithms, are tested to illustrate that the proposed solutions will work. (Very simple. Not much to learn.)
