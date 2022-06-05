# Deep Latent Variable Models for Cancer Genomics
## Team Members:
1. Akanksha Mishra (IIT Goa)
2. Dr. Wei Xia (Amazon Seattle Washington)
3. Dr. Nitish Raj (Oncologist)

## Introduction 

In the cancer genomics domain, gene expression data suffers from high dimensional and low sample size constraints, i.e., the number of genes often exceeds the number of samples. In this setting, feature selection is an important step but discovering relevant features is challenging. Deep learning models have shown promising performance in predicting different types of cancers given patients' gene sequencing. However, these models are mostly used as black boxes; hence, they are not ideal for identifying the genes responsible for specific predictions. We focus on developing interpretable models that medical practitioners can trust.

## Datasets

We use the data collected by popular The Cancer Genome Atlas (TCGA). It consists of 33 cancer types, and some cancers have subtypes, which we utilize in our study. To ease discussion, we focus on the breast cancer data—a major female cancer type in India. After downloading the data (981 samples with 20531 features or gene expressions), we preprocess it to reduce some noisy features.

## Methodology

We employ various global and instance-wise feature selection methods such as Extreme Pseudo Sampler (EPS) and Feature Selection using Stochastic Gates (STG). EPS is based on Variational AutoEncoder (VAE) and we extended it using softmax regression to accommodate multiple classes. STG simultaneously finds a subset of features and gives a model to predict classes for data samples. This method is based on the probabilistic relaxation of L-0 norm or the number of selected features to avoid shrinkage of coefficients as compared to LASSO, a popular feature selection method. We are also investigating other regularization techniques namely local-global shrinkage priors and other variations of LASSO in our problem setting.
