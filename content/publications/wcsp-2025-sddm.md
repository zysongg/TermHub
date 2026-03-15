---
id: wcsp-2025-sddm
title: "Channel Prediction Based on Spatially Dependent Diffusion Models"
authors: [Zhangyao Song, Xiang Zhang, Li Zhuang, Tao Guo, Xiaoyu Zhao, Yinfei Xu]
venue: "International Conference on Wireless Communications and Signal Processing (WCSP)"
venueType: conference
year: 2025
month: October
status: published
isFirstAuthor: true
links:
  paper: https://doi.org/10.1109/WCSP68525.2025.1010203
emoji: "📶"
---

Channel prediction is crucial for addressing the channel aging of time-varying channel in 5 G wireless communication. It aims to use past channel state information (CSI) to predict future CSI. Existing channel prediction methods usually process signals based on the temporal correlation of the channels, i.e., considering only the temporal variation relationship of the corresponding elements of the CSI matrix. However, elements of the matrix may be strongly related, which is essential to address channel aging. In this paper, we propose a channel prediction scheme utilizing spatial dependence based on diffusion models (SDDM) by additionally involving the spatial correlation of the channel. Moreover, we regard channel prediction as the denoising process in diffusion models, where instead of directly predicting the actual CSI, we achieve this by predicting the noise injected by the diffusion model. Specifically, the spatial and temporal correlations are extracted by transformers, which serve as the core of the denoising function within the diffusion model. The simulation results demonstrate that the proposed SDDM channel prediction method achieves better performance compared to methods that only involve temporal correlation in most scenarios.
