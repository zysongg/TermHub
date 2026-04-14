---
id: kbs-2026-fiprnet
title: "Frequency Interpolation with Period-aware Regularization for Robust Long-term Time Series Forecasting"
authors: [Zhangyao Song, Nanqing Jiang, Ziqiong Li, Li Zhuang, Yinfei Xu, Tao Guo]
venue: "Knowledge-Based Systems (KBS)"
venueType: preprint
year: 2026
status: accepted
isFirstAuthor: true
links: {}
emoji: "📈"
---

Long-term time series forecasting necessitates distinct modeling of global changes representing system evolution and local changes capturing fine-grained fluctuations.
However, classical decomposition methods often fail to decouple these components due to strong coupling effects and limited receptive fields, while also lacking principled guidance for cutoff frequency selection and effective residual regularization.
Addressing these gaps, we propose Frequency Interpolation with Period-aware Regularization (FIPR), a framework combining Frequency Interpolation Decomposition (FID) with Period-aware Regularization Patching (PRP).
Its decomposition module operates in the frequency domain to interpolate Fourier coefficients across time windows, ensuring continuity and recovering true global variation.
We derive a principled closed-form cutoff frequency from anti-imaging filtering theory to eliminate hyperparameter search and suppress aliasing.
The residual is then processed via PRP that employs period-aware guided downsampling and weight sharing to impose implicit regularization against periodic bias.
To demonstrate the effectiveness of FIPR, we propose a simple yet effective FIPRNet consisting of FIPR and an Multi-Layer Perceptron (MLP) head, which achieves state-of-the-art performance on real-world datasets from multiple domains.
Furthermore, as a novel plug-and-play module, FIPR can also enhance the performance of existing models.
