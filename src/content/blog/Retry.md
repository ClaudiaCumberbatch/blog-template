---
title: 'Retry'
description: >-
  Paper reading notes of If At First You Don’t Succeed, Try, Try, Again...?.
pubDate: 2025-02-10T22:00:00.000Z
heroImage: ../../assets/images/bg.jpg
category: Paper Reading Notes
tags:
  - Paper Notes
  - Resilient
  - Software Engineering
---

[If At First You Don’t Succeed, Try, Try, Again...?](https://www.microsoft.com/en-us/research/uploads/prod/2024/08/SOSP_2024__Detecting_Retry_Bugs_in_Software_Systems-1.pdf)

## Abstract

Motivation: Retry is difficult to implement and test. (why?)

Contribution: Propose techniques to detect retry problems in software. (sounds very software engineering)

## Introduction

Motivation:

- Retry is commonly under-tested.
- Retry is challenging to implement. In policy-level, we do not know whether a task is worth retry and when to retry. In machanism-level, we do not know how a task should retry (DAG and atomic task definition can work).
- Current retry frameworks cannot solve all problems. They only support simple retry.
- Retry is hard to test. (I strongly agree to this! I spent a lot of time in simulating transient failures in my resilience project and always feel that the simulation system I designed is rough.)

Contribution:

- Design WASABI to find bugs.
- Dynamic testing. Using fault injection to test retry logic and find bugs. Using LLM and static analysis to identify the location of retry and trigger it.
- Static checking. Using control flow checks (CodeQL) and LLM (GPT-4) to identify retry-related bugs (I can do this too in resilience project!).
