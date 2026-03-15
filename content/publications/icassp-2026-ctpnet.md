---
id: icassp-2026-ctpnet
title: "Channel, Trend and Periodic-Wise Representation Learning for Multivariate Long-term Time Series Forecasting"
authors: [Zhangyao Song, Nanqing Jiang, Miaohong He, Xiaoyu Zhao, Tao Guo]
venue: ICASSP
venueType: conference
year: 2026
status: accepted
isFirstAuthor: true
isCorrespondingAuthor: true
links:
  arxiv: https://arxiv.org/abs/2509.23583
  code: 
emoji: "😴"
---

Downsampling-based methods for time series forecasting have gained significant attention due to their effectiveness in capturing sequence trends. However, these approaches primarily focus on dependencies within subsequences, neglecting inter-subsequence and inter-channel interactions, which limits forecasting accuracy. To overcome these limitations, we propose CTPNET, a novel framework that explicitly learns representations from three complementary perspectives: i) inter-channel dependencies, captured by a temporal query-based multi-head attention mechanism; ii) intra-subsequence dependencies, modeled via a Transformer to characterize trend variations; and iii) inter-subsequence dependencies, extracted by reusing the encoder with residual connections to capture global periodic patterns. By jointly integrating these levels, the proposed method provides a holistic representation of temporal dynamics. Extensive experiments on multiple real-world datasets demonstrate the superiority and robustness of CTPNET, establishing new state-of-the-art performance in long-term time series forecasting.
