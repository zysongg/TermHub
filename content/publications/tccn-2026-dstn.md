---
id: tccn-2026-dstn
title: "Diffusion-Based Spatio-Temporal Channel Prediction via Non-Stationarity Decoupling"
authors: [Zhangyao Song, Xiang Zhang, Li Zhuang, Tao Guo, Xiaoyu Zhao, Yinfei Xu, Shi Jin]
venue: "IEEE Transactions on Cognitive Communications and Networking (TCCN)"
venueType: preprint
year: 2026
status: accepted
isFirstAuthor: true
links: {}
emoji: "🛰️"
---

Accurate channel prediction is crucial for addressing the channel aging of time-varying channel in 5 G wireless communication. However, existing channel prediction methods usually process signals based on the temporal correlation of the channels, i.e., considering only the temporal variation relationship of the corresponding elements of the CSI matrix. However, elements of the matrix may be strongly related, which is essential to address channel aging. In this paper, we propose a channel prediction scheme utilizing spatial dependence based on diffusion models (SDDM) by additionally involving the spatial correlation of the channel. Moreover, we regard channel prediction as the denoising process in diffusion models, where instead of directly predicting the actual CSI, we achieve this by predicting the noise injected by the diffusion model. Specifically, the spatial and temporal correlations are extracted by transformers, which serve as the core of the denoising function within the diffusion model. The simulation results demonstrate that the proposed SDDM channel prediction method achieves better performance compared to methods that only involve temporal correlation in most scenarios.