---
title: "Reddit Popularity Classification"
category: "NLP Experiment"
summary: "Transformer-based text classification study that benchmarks BERT-family embeddings, neural classifier heads, imbalance strategies, and evaluation diagnostics for Reddit popularity prediction."
coverImage: "/images/projects/data-mining-cover.png"
githubUrl: "https://github.com/sntk-76/Data-Mining"
featured: true
techStack:
  - Python
  - TensorFlow
  - Keras
  - Hugging Face
  - BERT
  - SMOTE
  - scikit-learn
  - Seaborn
impact:
  - "Benchmarks language representations for a noisy social-text prediction problem."
  - "Compares model architecture, embedding choices, and class-balancing strategies."
  - "Uses metric-driven evaluation with aggregate and per-label diagnostics."
order: 4
---

## Overview

This project studies whether Reddit post text can help predict post popularity. It converts post titles and body text into Transformer-based semantic representations, then benchmarks several neural architectures for a three-class classification problem.

The repository is structured as an applied NLP research workflow covering extraction, cleaning, label engineering, embedding generation, imbalance handling, model comparison, and error analysis.

## Problem

Popularity prediction is difficult because engagement is noisy, imbalanced, and influenced by language, community context, and timing. A keyword-only model is too shallow for the task, so this project uses contextual Transformer embeddings.

## Solution

The workflow turns `upvote_ratio` into low, average, and high popularity classes, cleans the text fields, combines title and self-text, creates BERT-family embeddings, balances classes, and trains multiple neural classifier heads.

## Technical Highlights

- Reddit post extraction and text preparation.
- Label engineering from engagement signals.
- BERT, RoBERTa, ALBERT, and TinyBERT-style embedding comparisons.
- Pooled-output and CLS-token representation testing.
- Oversampling, undersampling, and SMOTE-style class balancing.
- Dense, residual, progressive, CNN, autoencoder, and attention-style model heads.
- Evaluation with accuracy, precision, recall, F1-score, confusion matrices, and visual diagnostics.

## Results

Saved reports show several configurations reaching approximately 0.91 to 0.92 accuracy on the evaluated test split of 828 samples. ALBERT and TinyBERT-style configurations were especially competitive in the saved results.

## Future Improvements

- Add script-based training in addition to notebooks.
- Track experiments with MLflow or Weights & Biases.
- Add cross-validation and hyperparameter search.
- Compare Transformer embeddings against TF-IDF and classical ML baselines.
