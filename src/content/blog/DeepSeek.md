---
title: 'DeepSeek Model Training Techniques'
description: >-
  Paper reading notes of DeepSeek LLM Scaling Open-Source Language Models with Longtermism. Focus on accelaration techniques in system level.
pubDate: 2025-02-13T22:00:00.000Z
heroImage: ../../assets/images/paper.png
category: Paper Reading Notes
tags:
  - Paper Notes
  - Deep Learning
---

[DeepSeek LLM Scaling Open-Source Language Models with Longtermism](https://arxiv.org/pdf/2401.02954)

Text from 2.4 Infrastructures:
We use an efficient and light-weight training framework named HAI-LLM (High-flyer, 2023) to train and evaluate large language models. **Data parallelism, tensor parallelism, sequence parallelism, and 1F1B pipeline parallelism** are integrated into this framework as done in Megatron (Korthikanti et al., 2023; Narayanan et al., 2021; Shoeybi et al., 2019). We also leverage the **flash attention** (Dao, 2023; Dao et al., 2022) technique to improve hardware utilization. **ZeRO-1** (Rajbhandari et al., 2020) is exploited to partition optimizer states over data parallel ranks. Efforts are also made to **overlap computation and communication** to minimize additional waiting overhead, including the backward procedure of the last micro-batch and reduce-scatter operation in ZeRO-1, and GEMM computation and all-gather/reduce-scatter in sequence parallel. Some layers/operators are fused to speed up training, including LayerNorm, GEMM whenever possible, and Adam updates. To improve model training stability, we **train the model in bf16 precision but accumulate gradients in fp32 precision**. **In-place cross-entropy** is performed to reduce GPU memory consumption, i.e.: we convert bf16 logits to fp32 precision on the fly in the cross-entropy CUDA kernel (instead of converting it beforehand in HBM), calculate the corresponding bf16 gradient, and overwrite logits with its gradient.

## Parallelism

1. **Data parallelism**. The dataset is splitted into mini-batches and each of them is scheduled to different device.
2. **Tensor parallelism**. The parameters of a single layer of the model, such as the fully connected layer or the attention layer, are split across multiple devices. Each device calculates only part of the output and then merges the results through communication operations.
3. **Sequence parallelism**. Long sequence input is splitted into multiple subsequences which are assigned to different devices. Each device processes only part of the sequence and finally combines the results through communication operations.
4. **1F1B pipeline parallelism**. 1F1B (One Forward pass followed by One Backward pass). It distributes the different layers of the model to different devices, forming a pipeline. Each device performs forward propagation and back propagation in turn, and micro-batches are used to maintain pipeline continuity.

In conclusion:

- Data Parallelism: Used for data distribution.
- Tensor Parallelism: For model parameter splitting.
- Sequence Parallelism: Used for input sequence splitting.
- Pipeline Parallelism: Used for model layer splitting.

## Flash Attention

The core idea of Flash Attention is to reduce memory footprint and speed up computation through Tiling and Recomputation technologies.

**The problem of traditional attention computation.**

Compute attention score according to Query and Key

\[
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right) V
\]

Attention matrix \( QK^T \) for the size of the \( O(N^2) \), where \( N \) is a sequence length. For long sequences, storing the complete attention matrix takes up a lot of memory.

**Core ideas of Flash Attention:**

1. Tiling. The input sequence is divided into Tiles and the attention score is calculated one at a time.
2. Recomputation. In the case of forward propagation, the complete attention matrix is not stored, but partial intermediate results are recalculated in the case of back propagation.

## Mixed Precision Training

Traditional training usually uses FP32 to represent model parameters and intermediate results which requires more memory and computational resources. By introducing FP16, mixed-precision training significantly reduces memory footprint and speeds up computation while maintaining model training stability.

**Computations using FP16**: In forward propagation and back propagation, use FP16 for computationally intensive operations such as matrix multiplication and convolution.

**Store Master parameters using FP32**: When the optimizer updates parameters, use FP32 to store Master Weights for the model to avoid loss of accuracy.

**Loss Scaling**: Solve the problem of limited range of FP16 values by dynamically adjusting the scaling factor of the loss function.
